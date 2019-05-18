import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PointOfInterest} from "../domain/point-of-interest";
import {Marker} from "leaflet";
import {PoiService} from "../service/poi.service";
import {Category} from "../domain/category";

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
    this.addPOIForm = AddMarkerFormComponent.defaultForm(0, 0); //Placeholder
  }

  //Resets the form to track the newest marker
  public resetPOIForm() {
    //Subscribe to marker events to update form accordingly
    this.marker.on('add move drag dragEnd', function () {
      let newLatLng = this.formComponent.marker.getLatLng();
      this.formComponent.addPOIForm.setControl("lat", new FormControl(newLatLng.lat));
      this.formComponent.addPOIForm.setControl("long", new FormControl(newLatLng.lng));
    }, {formComponent: this});

    let latLng = this.marker.getLatLng();
    this.addPOIForm = AddMarkerFormComponent.defaultForm(latLng.lat, latLng.lng);

  }

  static defaultForm(lat: number, long: number): FormGroup {
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
    newPOI.category = this.getCategory(category);
    newPOI.description = description;
    newPOI.type = type;
    newPOI.lat = lat;
    newPOI.long = long;

    this.newPOI = newPOI;
  }

  getCategory(categoryName: string): Category {
    let category: Category = null;
    this.poiService.getCategory(categoryName).subscribe(
      (retrievedCategory: Category) =>
        category = retrievedCategory
    );

    return category;
  }

  cancelNewPOI() {
    this.cancelPOI.emit(null);
  }

  saveNewPOI(){
    this.poiService.savePOI(this.newPOI).subscribe();
  }

}
