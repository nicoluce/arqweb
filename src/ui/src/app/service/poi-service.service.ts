import { Injectable } from '@angular/core';
import {PointOfInterest} from "../domain/point-of-interest";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PoiServiceService {
  private http: HttpClient;
  private baseUrl: "localhost:8080";

  constructor(http: HttpClient) {
    this.http = http;
  }

  //Saves the POI in the backend
  savePOI(POI: PointOfInterest) {
    let POIGeoJSON = this.POIToGeoJSON(POI);
    //TODO
    //this.http.post(this.baseUrl + "/poi", POIGeoJSON);
  }

  //Converts a POI to a GeoJSON
  private POIToGeoJSON(POI: PointOfInterest) {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [POI.lat, POI.long]
      },
      properties: {
        "title": POI.title,
        "category": POI.category,
        "type": POI.type,
        "description": POI.description
      }
    };

  }
}
