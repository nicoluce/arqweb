import {ChangeDetectorRef, Component, EventEmitter, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
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

  //Use @ViewChildren instead of @ViewChild because of the *ngIf in the html template
  //@ViewChild("addMarkerComponent")
  //addMarkerComponent: AddMarkerFormComponent;
  private addMarkerComponent: AddMarkerFormComponent;

  @ViewChild('addMarkerComponent') set markerComponent(addMarkerComponent: AddMarkerFormComponent) {
    this.addMarkerComponent = addMarkerComponent;
    this.cdRef.detectChanges();
  }

/*
  @ViewChildren("addMarkerComponent")
  public addMarkerComponents: QueryList<AddMarkerFormComponent>;

  public ngAfterViewInit(): void {
    this.addMarkerComponents.changes.subscribe((comps: QueryList <AddMarkerFormComponent>) => {
      this.addMarkerComponent = comps.first;
    });

    console.log(this.addMarkerComponent);
  }
*/
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

  showSavePOIPopup(latLong: LatLng) {
    if (this.addingNewPOI) {
      //Remove last marker
      this.layers.pop();
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

    this.newMarker = newMarker;

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
    this.newMarker.bindPopup(this.markerHtml(savedPOI.title, savedPOI.category,
      savedPOI.description, savedPOI.type));
    this.newMarker.dragging.disable();
  }

  markerHtml(title: string, category: string, description: string, type: string) {
    return `<h2>${title}</h2> <h3>${category}</h3> <h3>${type}</h3> <p>${description}</p>`;
  }




}
