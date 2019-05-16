import { Injectable } from '@angular/core';
import {PointOfInterest} from "../domain/point-of-interest";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Feature} from "geojson";
import {environment} from "../../environments/environment";
import {LatLngBounds} from "leaflet";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PoiService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  //Saves the POI in the backend
  savePOI(POI: PointOfInterest): Observable<PointOfInterest> {
    let POIGeoJSON = PoiService.POIToGeoJSON(POI);
    return this.http.post<PointOfInterest>(environment.baseUrl + "/poi", POIGeoJSON);
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

  Search(title?: string, category?: string, markerLimit?: number, bounds?: LatLngBounds): Observable<PointOfInterest[]> {
    let queryParams = new HttpParams();

    if (title && !(title === "Any")) {
      queryParams = queryParams.append("title", title);
    }

    if (markerLimit) {
      queryParams = queryParams.append("limit", String(markerLimit));
    }

    if (category && !(category === "Any")) {
      queryParams = queryParams.append("category", category)
    }

    if (bounds) {
      let westLong = bounds.getWest();
      let eastLong = bounds.getEast();
      let northLat = bounds.getNorth();
      let southLat = bounds.getSouth();
      queryParams = queryParams.append("west_long", String(westLong));
      queryParams = queryParams.append("east_long", String(eastLong));
      queryParams = queryParams.append("north_lat", String(northLat));
      queryParams = queryParams.append("south_at", String(southLat));
      queryParams = queryParams.append("bound", String(true));
    }

    return this.http.get<PointOfInterest[]>(environment.baseUrl + "/poi/search",
      {params: queryParams});

  }

  updatePOI(POI: PointOfInterest): Observable<PointOfInterest> {
    return this.http.put<PointOfInterest>(environment.baseUrl + "/poi", PoiService.POIToGeoJSON(POI));
  }
}
