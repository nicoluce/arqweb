import { Injectable } from '@angular/core';
import {PointOfInterest} from "../domain/point-of-interest";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Feature} from "geojson";
import {environment} from "../../environments/environment";
import {LatLngBounds} from "leaflet";
import {Observable, of} from "rxjs";
import {Category} from "../domain/category";

@Injectable({
  providedIn: 'root'
})
export class PoiService {
  private http: HttpClient;

  public availableCategories = ["food", "entertainment", "art", "museum"]; //TODO: fetch from backend
  public availableTypes = ["building", "person", "event", "object"]; //TODO: fetch from backend

  constructor(http: HttpClient) {
    this.http = http;
  }

  //Saves the POI in the backend
  public savePOI(POI: PointOfInterest): Observable<PointOfInterest> {
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
        "category": POI.category.name,
        "type": POI.type,
        "description": POI.description
      }
    };

  }

  public Search(title?: string, categoryName?: string, markerLimit?: number, bounds?: LatLngBounds,
         showHiddenCategories?: boolean): Observable<PointOfInterest[]> {

    let queryParams = new HttpParams();

    if (title && !(title === "Any")) {
      queryParams = queryParams.append("title", title);
    }

    if (markerLimit) {
      queryParams = queryParams.append("limit", String(markerLimit));
    }

    if (categoryName && !(categoryName === "Any")) {
      queryParams = queryParams.append("categoryName", categoryName)
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

    if (showHiddenCategories) {
      queryParams = queryParams.append("hidden_categories", String(true));
    }

    return this.http.get<PointOfInterest[]>(environment.baseUrl + "/poi/search",
      {params: queryParams});

  }

  public updatePOI(POI: PointOfInterest): Observable<PointOfInterest> {
    return this.http.put<PointOfInterest>(environment.baseUrl + "/poi", PoiService.POIToGeoJSON(POI));
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(environment.baseUrl + "/category")
  }

  public getCategory(name: string): Observable<Category> {
    return of(new Category("food", false));
    //TODO: use backend
    //return this.http.get<Category>(environment.baseUrl + `/category/${name}`)
  }

  public updateCategory(categoryName: string, category: Category): Observable<Category> {
    return this.http.put<Category>(environment.baseUrl + `/category/${categoryName}`, category)
  }

  deleteCategory(categoryName: string): Observable<Category> {
    return this.http.delete<Category>(environment.baseUrl + `/category/${categoryName}`)
  }
}
