import {Component, OnInit, ViewChild} from '@angular/core';
import {PointOfInterest} from "../domain/point-of-interest";
import {PoiService} from "../service/poi.service";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";
import {Image} from "../domain/point-of-interest";

@Component({
  selector: 'app-edit-poi',
  templateUrl: './edit-poi.component.html',
  styleUrls: ['./edit-poi.component.sass']
})
export class EditPoiComponent implements OnInit {

  private searchPOITitle: string;
  private POI: PointOfInterest;
  private POIPictureUrl;

  constructor(private poiService: PoiService, private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.searchPOITitle = '';
  }

  sanitize() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.POIPictureUrl);
  }

  getPOI() {
    this.poiService.Search(this.searchPOITitle).subscribe(
      (POI: PointOfInterest[]) => {
        this.POI = POI[0];
      }
    );

    this.updatePOIPictureUrl();
  }

  private updatePOIPictureUrl() {
    if (this.POI.picture) {
      this.POIPictureUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(
        `data:${this.POI.picture.contentType};base64, ${this.POI.picture.data}`);
    }
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.POI.picture = new Image((<string>reader.result).split(',')[1], file.name, file.type);
        this.updatePOIPictureUrl();
      };
    }
  }

  getPOIByTitle() {
    this.getPOI();
  }

  updatePOI() {
    this.poiService.updatePOI(this.POI).subscribe(
      (updatedPOI: PointOfInterest) => {
        this.POI = updatedPOI;
      }
    );
  }

  cancelEditPOI() {
    this.POI = null;
  }
}
