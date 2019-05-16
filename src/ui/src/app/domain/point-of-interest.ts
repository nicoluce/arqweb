import {Feature} from "geojson";
import {Category} from "./category";

export class PointOfInterest {

  id: string
  title: string;
  category: Category;
  ownerId: number;
  description: string;
  type: string;
  lat: number;
  long: number;

}
