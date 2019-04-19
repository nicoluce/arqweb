import { Component, OnInit } from '@angular/core';
import {latLng, tileLayer} from "leaflet";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 15,
    center: latLng([ -34.581199, -58.421058 ])
  };

  constructor() { }

  ngOnInit() {
  }

}
