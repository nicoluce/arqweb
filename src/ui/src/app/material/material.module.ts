import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatMenuModule,
  MatSelectModule, MatTableModule, MatTabsModule, MatToolbarModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule

  ]
})
export class MaterialModule { }
