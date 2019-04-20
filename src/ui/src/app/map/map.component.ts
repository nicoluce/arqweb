import { Component, OnInit } from '@angular/core';
import {
  control,
  icon,
  LatLng,
  latLng,
  Layer,
  LeafletMouseEvent,
  marker,
  Marker,
  MarkerOptions,
  tileLayer
} from "leaflet";
import layers = control.layers;
import {PointOfInterest} from "../domain/point-of-interest";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

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

  constructor() {
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
    this.addPOIForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      description: new FormControl(''),
      type: new FormControl('', [Validators.required, Validators.maxLength(30)])
    });
  }

  showSaveLocationPopup(latLong: LatLng) {
    if (this.addingNewPOI) {
      this.cancelNewPOI();
    }

    this.addingNewPOI = true;
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

    this.newMarker = newMarker;
    this.layers.push(newMarker);

  }

  addPOI(newPoiForm) {
    this.newMarker.dragging.disable();
    console.log(newPoiForm);
    this.addingNewPOI = false;
    this.newMarker.bindPopup(this.markerHtml(newPoiForm.title, newPoiForm.description, newPoiForm.type));
  }

  private markerHtml(title: string, description: string, type: string) {
    return `<h2>${title}</h2> <h3>${type}</h3> <p>${description}</p>`;
  }

  cancelNewPOI() {
    this.addingNewPOI = false;
    this.layers.pop();
    this.resetPOIForm();
  }

}
