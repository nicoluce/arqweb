import { Component, OnInit } from '@angular/core';
import {CategorySuggestion} from "../domain/category-suggestion";
import {PoiService} from "../service/poi.service";
import {MatSelectionListChange} from "@angular/material";

@Component({
  selector: 'app-category-suggestions',
  templateUrl: './category-suggestions.component.html',
  styleUrls: ['./category-suggestions.component.sass']
})
export class CategorySuggestionsComponent implements OnInit {

  private suggestions: CategorySuggestion[];
  private selectedSuggestions: CategorySuggestion[];

  constructor(private poiService: PoiService) { }

  ngOnInit() {
    this.getPendingSuggestions();

    this.selectedSuggestions = [];

  }

  private getPendingSuggestions() {
    this.poiService.getPendingCategorySuggestions().subscribe(
      (pendingSuggestions: CategorySuggestion[]) => {
        this.suggestions = pendingSuggestions;
      }
    );
  }

  approve() {
    this.selectedSuggestions.forEach(
      (suggestion: CategorySuggestion) => {
        this.poiService.approveSuggestion(suggestion).subscribe();
        /*const index: number = this.suggestions.indexOf(suggestion);
        if (index !== -1) {
          this.suggestions.splice(index, 1);
        }*/

      }
    );
    this.getPendingSuggestions();

  }

  reject() {
    this.selectedSuggestions.forEach(
      (suggestion: CategorySuggestion) => {
        this.poiService.rejectSuggestion(suggestion).subscribe();
        /*const index: number = this.suggestions.indexOf(suggestion);
        if (index !== -1) {
          this.suggestions.splice(index, 1);
        }*/
      }
    );
    this.getPendingSuggestions();

  }



}
