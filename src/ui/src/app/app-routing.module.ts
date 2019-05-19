import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapComponent} from "./map/map.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuardService} from "./service/auth-guard.service";
import {EditPoiComponent} from "./edit-poi/edit-poi.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {NewCategorySuggestionFormComponent} from "./new-category-suggestion-form/new-category-suggestion-form.component";

const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full'},
  { path: 'map', component: MapComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'suggestion', children: [
      {
        path: 'category', children: [
          {
            path: 'new', component: NewCategorySuggestionFormComponent
          }
        ]
      }
    ]
  },
  { path: 'administration', children: [
      {
        path: 'edit', canActivateChild: [AuthGuardService], children: [
          {
            path: 'poi', component: EditPoiComponent
          },
          {
            path: 'category', component: EditCategoryComponent
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
