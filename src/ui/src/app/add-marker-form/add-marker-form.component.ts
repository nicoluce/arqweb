import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PointOfInterest} from "../domain/point-of-interest";
import {LatLng, LeafletEvent, Marker} from "leaflet";
import {MapComponent} from "../map/map.component";
import {PoiService} from "../service/poi.service";

@Component({
  selector: 'app-add-marker-form',
  templateUrl: './add-marker-form.component.html',
  styleUrls: ['./add-marker-form.component.sass']
})
export class AddMarkerFormComponent implements OnInit {

  @Input() marker: Marker;
  addPOIForm: FormGroup;
  newPOI: PointOfInterest;
  @Output() addedPOI: EventEmitter<any> = new EventEmitter();
  @Output() cancelPOI: EventEmitter<any> = new EventEmitter();
  private poiService: PoiService;

  constructor(poiService: PoiService) {
    this.poiService = poiService;
  }

  ngOnInit() {
    this.addPOIForm = this.defaultForm(0, 0); //Placeholder
  }

  //Resets the form to track the newest marker
  public resetPOIForm() {
    //Subscribe to marker events to update form accordingly
    this.marker.on('add move drag dragEnd', function (e: LeafletEvent) {
      let newLatLng = this.formComponent.marker.getLatLng();
      this.formComponent.addPOIForm.setControl("lat", new FormControl(newLatLng.lat));
      this.formComponent.addPOIForm.setControl("long", new FormControl(newLatLng.lng));
    }, {formComponent: this});

    let latLng = this.marker.getLatLng();
    this.addPOIForm = this.defaultForm(latLng.lat, latLng.lng);

  }

  defaultForm(lat: number, long: number): FormGroup {
    return new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      category: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl(''),
      type: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lat: new FormControl(lat),
      long: new FormControl(long)
    })
  }

  //Argument has same fields as control group
  addPOI(newPoiForm: any) {
    let latLng = this.marker.getLatLng();

    this.buildPOI(newPoiForm.title, newPoiForm.category,
      newPoiForm.description, newPoiForm.type, latLng.lat, latLng.lng);

    this.saveNewPOI();

    //Inform map of save event
    this.addedPOI.emit(this.newPOI);

  }

  buildPOI(title: string, category: string, description: string, type: string, lat: number, long: number) {
    let newPOI = new PointOfInterest();
    newPOI.title = title;
    newPOI.category = category;
    newPOI.description = description;
    newPOI.type = type;
    newPOI.lat = lat;
    newPOI.long = long;

    this.newPOI = newPOI;
  }

  cancelNewPOI() {
    this.cancelPOI.emit(null);
  }

  saveNewPOI(){
    this.poiService.savePOI(this.newPOI).subscribe();
  }

}
