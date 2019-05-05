import { Injectable } from '@angular/core';
import {PointOfInterest} from "../domain/point-of-interest";
import {HttpClient} from "@angular/common/http";
import {Feature} from "geojson";
import {environment} from "../../environments/environment";
import {LatLngBounds} from "leaflet";

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
    this.http.post<PointOfInterest>(environment.baseUrl + "/poi", POIGeoJSON).subscribe(
      (next: PointOfInterest) => console.log(`Saved POI with id: ${next.id}`)
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

  Search(category: string, markerLimit: number, bounds: LatLngBounds) {
    //TODO
    return [];
  }
}
