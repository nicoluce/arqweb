import { Injectable } from '@angular/core';
import {PointOfInterest} from "../domain/point-of-interest";
import {HttpClient} from "@angular/common/http";
import {Feature, GeoJsonObject} from "geojson";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PoiService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  //Saves the POI in the backend
  savePOI(POI: PointOfInterest) {
    let POIGeoJSON = PoiService.POIToGeoJSON(POI);
    this.http.post(environment.baseUrl + "/poi", POIGeoJSON).subscribe(
      (next) => console.log(`Saved POI: ${next}`)
    );
  }

  //Converts a POI to a GeoJSON
  private static POIToGeoJSON(POI: PointOfInterest): Feature {
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
