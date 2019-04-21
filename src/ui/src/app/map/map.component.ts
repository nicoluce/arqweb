import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import * as L from "leaflet";
import {icon, LatLng, latLng, Layer, LeafletMouseEvent, Map, marker, Marker, tileLayer} from "leaflet";
import {PointOfInterest} from "../domain/point-of-interest";
import {AddMarkerFormComponent} from "../add-marker-form/add-marker-form.component";

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

  newMarker: Marker;

  //Use @ViewChild to inject child component. Using setter
  //because of the *ngIf in the html template.
  private addMarkerComponent: AddMarkerFormComponent;
  private map: Map;

  @ViewChild('addMarkerComponent') set markerComponent(addMarkerComponent: AddMarkerFormComponent) {
    this.addMarkerComponent = addMarkerComponent;
    this.cdRef.detectChanges();
  }

  constructor(private cdRef:ChangeDetectorRef) {
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
  }

  onMapReady(map: Map) {
    this.map = map;
  }

  showSavePOIPopup(latLong: LatLng) {
    if (this.addingNewPOI) {
      //Remove last marker
      this.layers.pop();
    }

    let newMarker = marker(latLong, {
      icon: icon({
        iconSize: [ 25, 41 ],
        iconAnchor: [ 13, 41 ],
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      }),
      clickable: true,
      draggable: true,
    });

    this.newMarker = newMarker;

    //Zoom on marker when clicked
    this.newMarker.on("click", function (me: LeafletMouseEvent) {
      let latLng = [me.latlng];
      // noinspection JSPotentiallyInvalidUsageOfClassThis
      this.map.fitBounds(L.latLngBounds(latLng), {maxZoom: 15})
    },{map: this.map});

    this.addingNewPOI = true;
    //Subscribes add-marker component to the new marker to track coordinates
    //SetTimeout is used to give time for the @ViewChild to set the component
    //after the *ngIf activation
    setTimeout(() => this.addMarkerComponent.resetPOIForm(), 1);

    this.layers.push(newMarker);

  }

  hideNewPOIForm(removeLastLayer = true) {
    this.addingNewPOI = false;
    if (removeLastLayer) {
      this.layers.pop();
    }
  }

  onPOIAdd(savedPOI: PointOfInterest) {
    this.hideNewPOIForm(false);
    this.newMarker.bindPopup(this.markerPopupHtml(savedPOI.title, savedPOI.category,
      savedPOI.description, savedPOI.type));
    this.newMarker.dragging.disable();
    let newIcon = icon({
      iconUrl: 'leaflet/marker-icon.png',
      shadowUrl: 'leaflet/marker-shadow.png'
    });
    this.newMarker.setIcon(newIcon);
  }

  markerPopupHtml(title: string, category: string, description: string, type: string) {
    return `<h2>${title}</h2> <h3>${category}</h3> <h3>${type}</h3> <p>${description}</p>`;
  }




}
