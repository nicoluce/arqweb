import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {EditPoiComponent} from "./edit-poi/edit-poi.component";

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full'},
  { path: 'map', component: MapComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'administration', children: [
      {
        path: 'edit', canActivateChild: [AuthGuardService], children: [
          {
            path: 'poi', component: EditPoiComponent
          },
          {
            path: 'category', component: EditPoiComponent //TODO: change component
          },
          {
            path: '', redirectTo: '/map', pathMatch: 'full'
          }
        ]
      },
      {
        path: '', redirectTo: '/map', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
