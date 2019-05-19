import { Component, OnInit } from '@angular/core';
import {PoiService} from "../service/poi.service";
import {Category} from "../domain/category";

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.sass']
})
export class EditCategoryComponent implements OnInit {

  private searchCategoryName: string;
  private category: Category;

  constructor(private poiService: PoiService) { }

  ngOnInit() {
    this.searchCategoryName = '';
  }

  private getCategory(): void {
    this.poiService.getCategory(this.searchCategoryName).subscribe(
      (category: Category) => {
        this.category = category;
      }
    );
  }

  private updateCategory(): void {
    this.poiService.updateCategory(this.category).subscribe(
      (newCategory: Category) => {
        this.category = newCategory;
      }
    );
  }

  private cancelUpdateCategory(): void {
    this.category = null;
  }

  private deleteCategory(): void {
    this.poiService.deleteCategory(this.category.name).subscribe(
      () => {
        this.category = null;
      }
    );
  }

}
