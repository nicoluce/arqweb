import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

/**
 * @title Filter autocomplete
 */
@Component({
  selector: 'app-poi-filter',
  templateUrl: './poi-filter.component.html',
  styleUrls: ['./poi-filter.component.sass'],
})
export class POIFilterComponent implements OnInit {
  filtersControl: FormGroup;
  availableCategories: string[] = ['Any', 'Food', 'Entertainment', 'Art', 'Museum'];
  filteredOptions: Observable<string[]>;
  @Output() filterChange: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.filtersControl = new FormGroup({
      category: new FormControl("Any", [Validators.required, Validators.maxLength(30)])
    });

    this.filteredOptions = this.filtersControl.get("category").valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.availableCategories.filter(option => option.toLowerCase().includes(filterValue));
  }

  //Only emits category, but could be extended with other filters
  private updateFilters(filtersControl: any) {
    this.filterChange.emit(filtersControl.category)
  }

}
