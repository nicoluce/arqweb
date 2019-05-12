import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "./material/material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import { AddMarkerFormComponent } from './add-marker-form/add-marker-form.component';
import {HttpClientModule} from "@angular/common/http";
import {POIFilterComponent} from "./poi-filter/poi-filter.component";
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full'},
  { path: 'map', component: MapComponent },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    AddMarkerFormComponent,
    POIFilterComponent,
    LoginComponent,
    NavigationToolbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot(),
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
