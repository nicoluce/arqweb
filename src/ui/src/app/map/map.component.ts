import { Component, OnInit } from '@angular/core';
import {
  control,
  icon,
  LatLng,
  latLng,
  Layer, LeafletEvent,
  LeafletMouseEvent,
  marker,
  Marker,
  MarkerOptions,
  tileLayer
} from "leaflet";
import layers = control.layers;
import {PointOfInterest} from "../domain/point-of-interest";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {PoiServiceService} from "../service/poi-service.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  initialSetup: object;

  //Control base layers and overlays
  layersControl: object;

  layers: Layer[];

  addingNewPOI = false;
  addPOIForm: FormGroup;
  newPOI: PointOfInterest;
  newMarker: Marker;
  private poiService: PoiServiceService;

  constructor(poiService: PoiServiceService) {
    this.poiService = poiService;
  }

  ngOnInit() {
    this.initialSetup = {
      layers: [
        this.streetMaps
      ],
      zoom: 15,
      center: latLng([ -34.581199, -58.421058 ])
    };

    this.layersControl= {
      baseLayers: {
        "Street": this.streetMaps,
        "Wikimedia": this.wMaps
      },
      overlays: {}
    };

    this.layers = [];

    this.resetPOIForm();

  }

  resetPOIForm() {
    let latLng;
    if (this.newMarker != null) {
      latLng = this.newMarker.getLatLng();
    } else {
      latLng = new LatLng(0, 0);
    }
    this.addPOIForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      category: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl(''),
      type: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      lat: new FormControl(latLng.lat),
      long: new FormControl(latLng.lng)
    });
  }

  showSavePOIPopup(latLong: LatLng) {
    if (this.addingNewPOI) {
      this.cancelNewPOI();
    }

    let newMarker = marker(latLong, {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'leaflet/marker-icon.png',
        shadowUrl: 'leaflet/marker-shadow.png'
      }),
      clickable: true,
      draggable: true,
    });

    newMarker.on('add move drag dragEnd', function (e) {
      let latLng = newMarker.getLatLng();
      this.mapComponent.addPOIForm.setControl("lat", new FormControl(latLng.lat));
      this.mapComponent.addPOIForm.setControl("long", new FormControl(latLng.lng));
    }, {mapComponent: this});

    this.newMarker = newMarker;

    this.addingNewPOI = true;

    this.layers.push(newMarker);

  }

  addPOI(newPoiForm) {
    this.newMarker.dragging.disable();
    console.log(newPoiForm);
    this.addingNewPOI = false;
    this.newMarker.bindPopup(this.markerHtml(newPoiForm.title, newPoiForm.category,
      newPoiForm.description, newPoiForm.type));
    
    this.saveNewPOI(newPoiForm.title, newPoiForm.category,
      newPoiForm.description, newPoiForm.type);
  }

  private markerHtml(title: string, category: string, description: string, type: string) {
    return `<h2>${title}</h2> <h3>${category}</h3> <h3>${type}</h3> <p>${description}</p>`;
  }

  cancelNewPOI() {
    this.addingNewPOI = false;
    this.layers.pop();
    this.resetPOIForm();
  }

  saveNewPOI(title: string, category: string, description: string, type: string){
    this.buildPOI(title, category, description, type);
    this.poiService.savePOI(this.newPOI);
  }

  buildPOI(title: string, category: string, description: string, type: string) {
    let newPOI = new PointOfInterest();
    newPOI.title = title;
    newPOI.category = category;
    newPOI.description = description;
    newPOI.type = type;

    this.newPOI = newPOI;
  }


}
