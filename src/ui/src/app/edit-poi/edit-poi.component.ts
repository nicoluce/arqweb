import { Component, OnInit } from '@angular/core';
import {PointOfInterest} from "../domain/point-of-interest";
import {PoiService} from "../service/poi.service";

@Component({
  selector: 'app-edit-poi',
  templateUrl: './edit-poi.component.html',
  styleUrls: ['./edit-poi.component.sass']
})
export class EditPoiComponent implements OnInit {

  private searchPOITitle: string;
  private POI: PointOfInterest;

  constructor(private poiService: PoiService) { }

  ngOnInit() {
    this.searchPOITitle = '';
  }

  getPOI() {
    this.poiService.Search(this.searchPOITitle).subscribe(
      (POI: PointOfInterest[]) => {
        this.POI = POI[0];
      }
    );
  }

  onSubmit() {
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
