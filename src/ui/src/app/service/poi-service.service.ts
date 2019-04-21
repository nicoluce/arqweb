import { Injectable } from '@angular/core';
import {PointOfInterest} from "../domain/point-of-interest";

@Injectable({
  providedIn: 'root'
})
export class PoiServiceService {

  constructor() { }

  savePOI(POI: PointOfInterest) {
    let POIGeoJSON = this.POIToGeoJSON(POI);
  }

  private POIToGeoJSON(POI: PointOfInterest) {

  }
}
