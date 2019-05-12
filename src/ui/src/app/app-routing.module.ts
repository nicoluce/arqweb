import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {LoginComponent} from "./login/login.component";
import {BackofficeComponent} from "./backoffice/backoffice.component";

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full'},
  { path: 'map', component: MapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'administration', component: BackofficeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
