(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-marker-form/add-marker-form.component.html":
/*!****************************************************************!*\
  !*** ./src/app/add-marker-form/add-marker-form.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>New marker</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <form [formGroup]=\"addPOIForm\" (ngSubmit)=\"addPOI(addPOIForm.value)\" fxLayout=\"column\" fxFlex=\"80%\" fxFlex.lt-md=\"100%\"\r\n  >\r\n    <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Title\" required formControlName=\"title\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <mat-select placeholder=\"Category\" required formControlName=\"category\">\r\n          <mat-option *ngFor=\"let category of availableCategories\" [value]=\"category.name.toLowerCase()\">\r\n            {{category.name | titlecase}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <textarea matInput placeholder=\"Description\" formControlName=\"description\"></textarea>\r\n      </mat-form-field>\r\n\r\n      <!--<mat-form-field>-->\r\n        <!--<mat-select placeholder=\"Type\" required formControlName=\"type\">-->\r\n          <!--<mat-option *ngFor=\"let type of poiService.availableTypes\" [value]=\"type\">-->\r\n            <!--{{type | titlecase}}-->\r\n          <!--</mat-option>-->\r\n        <!--</mat-select>-->\r\n      <!--</mat-form-field>-->\r\n\r\n      <mat-card-content fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" required formControlName=\"lat\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" required formControlName=\"long\">\r\n        </mat-form-field>\r\n\r\n      </mat-card-content>\r\n\r\n      <label><b>Add Picture</b></label>\r\n      <input type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\" #fileInput>\r\n\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions align=\"center\">\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"!addPOIForm.valid\">Add</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"cancelNewPOI()\">Cancel</button>\r\n    </mat-card-actions>\r\n\r\n  </form>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/add-marker-form/add-marker-form.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/add-marker-form/add-marker-form.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1tYXJrZXItZm9ybS9hZGQtbWFya2VyLWZvcm0uY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/add-marker-form/add-marker-form.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-marker-form/add-marker-form.component.ts ***!
  \**************************************************************/
/*! exports provided: AddMarkerFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMarkerFormComponent", function() { return AddMarkerFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _domain_point_of_interest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/point-of-interest */ "./src/app/domain/point-of-interest.ts");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_poi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/poi.service */ "./src/app/service/poi.service.ts");






var AddMarkerFormComponent = /** @class */ (function () {
    function AddMarkerFormComponent(poiService) {
        this.addedPOI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelPOI = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.poiService = poiService;
    }
    AddMarkerFormComponent_1 = AddMarkerFormComponent;
    AddMarkerFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addPOIForm = AddMarkerFormComponent_1.defaultForm(0, 0); //Placeholder
        this.poiService.getCategories().subscribe(function (categories) {
            _this.availableCategories = categories;
        });
    };
    //Resets the form to track the newest marker
    AddMarkerFormComponent.prototype.resetPOIForm = function () {
        //Subscribe to marker events to update form accordingly
        this.marker.on('add move drag dragEnd', function () {
            var newLatLng = this.formComponent.marker.getLatLng();
            this.formComponent.addPOIForm.setControl("lat", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](newLatLng.lat));
            this.formComponent.addPOIForm.setControl("long", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](newLatLng.lng));
        }, { formComponent: this });
        var latLng = this.marker.getLatLng();
        this.addPOIForm = AddMarkerFormComponent_1.defaultForm(latLng.lat, latLng.lng);
    };
    AddMarkerFormComponent.defaultForm = function (lat, long) {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60)]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](lat),
            long: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](long),
            picture: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                contentType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
                data: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
            })
        });
    };
    AddMarkerFormComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.addPOIForm.get('picture').setValue({
                    name: file_1.name,
                    contentType: file_1.type,
                    data: reader.result.split(',')[1]
                });
            };
        }
    };
    //Argument has same fields as control group
    AddMarkerFormComponent.prototype.addPOI = function (newPoiForm) {
        var latLng = this.marker.getLatLng();
        var formPicture = newPoiForm.picture;
        var picture = new _domain_point_of_interest__WEBPACK_IMPORTED_MODULE_3__["Image"](formPicture.data, formPicture.name, formPicture.contentType);
        this.createPOI(newPoiForm.title, newPoiForm.category, newPoiForm.description, latLng.lat, latLng.lng, picture);
    };
    AddMarkerFormComponent.prototype.createPOI = function (title, category, description, lat, long, picture) {
        var _this = this;
        this.poiService.getCategory(category).subscribe(function (category) {
            var newPOI = new _domain_point_of_interest__WEBPACK_IMPORTED_MODULE_3__["PointOfInterest"]();
            newPOI.title = title;
            newPOI.category = category[0];
            newPOI.description = description;
            newPOI.lat = lat;
            newPOI.long = long;
            newPOI.picture = picture;
            newPOI.hidden = false;
            _this.newPOI = newPOI;
            _this.saveNewPOI();
            //Inform map of save event
            _this.addedPOI.emit(_this.newPOI);
        });
    };
    AddMarkerFormComponent.prototype.cancelNewPOI = function () {
        this.cancelPOI.emit(null);
    };
    AddMarkerFormComponent.prototype.saveNewPOI = function () {
        this.poiService.savePOI(this.newPOI).subscribe();
    };
    var AddMarkerFormComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", leaflet__WEBPACK_IMPORTED_MODULE_4__["Marker"])
    ], AddMarkerFormComponent.prototype, "marker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddMarkerFormComponent.prototype, "addedPOI", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AddMarkerFormComponent.prototype, "cancelPOI", void 0);
    AddMarkerFormComponent = AddMarkerFormComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-marker-form',
            template: __webpack_require__(/*! ./add-marker-form.component.html */ "./src/app/add-marker-form/add-marker-form.component.html"),
            styles: [__webpack_require__(/*! ./add-marker-form.component.sass */ "./src/app/add-marker-form/add-marker-form.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_poi_service__WEBPACK_IMPORTED_MODULE_5__["PoiService"]])
    ], AddMarkerFormComponent);
    return AddMarkerFormComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/auth-guard.service */ "./src/app/service/auth-guard.service.ts");
/* harmony import */ var _edit_poi_edit_poi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-poi/edit-poi.component */ "./src/app/edit-poi/edit-poi.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/edit-category/edit-category.component.ts");
/* harmony import */ var _new_category_suggestion_form_new_category_suggestion_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-category-suggestion-form/new-category-suggestion-form.component */ "./src/app/new-category-suggestion-form/new-category-suggestion-form.component.ts");
/* harmony import */ var _category_suggestions_category_suggestions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./category-suggestions/category-suggestions.component */ "./src/app/category-suggestions/category-suggestions.component.ts");










var routes = [
    { path: '', redirectTo: '/map', pathMatch: 'full' },
    { path: 'map', component: _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], canActivate: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]] },
    { path: 'suggestion', children: [
            {
                path: 'category', children: [
                    {
                        path: 'new', component: _new_category_suggestion_form_new_category_suggestion_form_component__WEBPACK_IMPORTED_MODULE_8__["NewCategorySuggestionFormComponent"]
                    }
                ]
            }
        ]
    },
    { path: 'administration', children: [
            {
                path: 'edit', canActivateChild: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]], children: [
                    {
                        path: 'poi', component: _edit_poi_edit_poi_component__WEBPACK_IMPORTED_MODULE_6__["EditPoiComponent"]
                    },
                    {
                        path: 'category', component: _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_7__["EditCategoryComponent"]
                    },
                    {
                        path: '', redirectTo: '/map', pathMatch: 'full'
                    }
                ]
            },
            {
                path: 'suggestion', canActivateChild: [_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]], children: [
                    {
                        path: 'category', children: [
                            {
                                path: 'new', component: _category_suggestions_category_suggestions_component__WEBPACK_IMPORTED_MODULE_9__["CategorySuggestionsComponent"]
                            }
                        ]
                    }
                ]
            },
            {
                path: '', redirectTo: '/map', pathMatch: 'full'
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\r\n</head>\r\n\r\n<mat-sidenav-container>\r\n  <mat-sidenav #sidenav role=\"navigation\">\r\n    <app-sidenav (sidenavClose)=\"sidenav.toggle()\"></app-sidenav>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <app-navigation-toolbar (sidenavToggled)=\"sidenav.toggle()\"></app-navigation-toolbar>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-sidenav-container, .mat-sidenav-content, .mat-sidenav {\n  height: 100%; }\n\n.mat-sidenav {\n  width: 250px; }\n\n.html, .body {\n  margin: 0;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxubHVjZVxcRG9jdW1lbnRzXFxHb1xcc3JjXFxnaXRodWIuY29tXFxuaWNvbHVjZVxcYXJxd2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxTQUFTO0VBQ1QsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgLm1hdC1zaWRlbmF2LWNvbnRlbnQsIC5tYXQtc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG5cbi5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDsgfVxuXG4uaHRtbCwgLmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map/map.component */ "./src/app/map/map.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _add_marker_form_add_marker_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-marker-form/add-marker-form.component */ "./src/app/add-marker-form/add-marker-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _poi_filter_poi_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./poi-filter/poi-filter.component */ "./src/app/poi-filter/poi-filter.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _navigation_toolbar_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navigation-toolbar/navigation-toolbar.component */ "./src/app/navigation-toolbar/navigation-toolbar.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _edit_poi_edit_poi_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./edit-poi/edit-poi.component */ "./src/app/edit-poi/edit-poi.component.ts");
/* harmony import */ var _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./edit-category/edit-category.component */ "./src/app/edit-category/edit-category.component.ts");
/* harmony import */ var ngx_icon_picker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-icon-picker */ "./node_modules/ngx-icon-picker/dist/index.js");
/* harmony import */ var ngx_icon_picker__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_icon_picker__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _new_category_suggestion_form_new_category_suggestion_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./new-category-suggestion-form/new-category-suggestion-form.component */ "./src/app/new-category-suggestion-form/new-category-suggestion-form.component.ts");
/* harmony import */ var _category_suggestions_category_suggestions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./category-suggestions/category-suggestions.component */ "./src/app/category-suggestions/category-suggestions.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _map_map_component__WEBPACK_IMPORTED_MODULE_6__["MapComponent"],
                _add_marker_form_add_marker_form_component__WEBPACK_IMPORTED_MODULE_10__["AddMarkerFormComponent"],
                _poi_filter_poi_filter_component__WEBPACK_IMPORTED_MODULE_12__["POIFilterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _navigation_toolbar_navigation_toolbar_component__WEBPACK_IMPORTED_MODULE_14__["NavigationToolbarComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__["SidenavComponent"],
                _edit_poi_edit_poi_component__WEBPACK_IMPORTED_MODULE_16__["EditPoiComponent"],
                _edit_category_edit_category_component__WEBPACK_IMPORTED_MODULE_17__["EditCategoryComponent"],
                _new_category_suggestion_form_new_category_suggestion_form_component__WEBPACK_IMPORTED_MODULE_19__["NewCategorySuggestionFormComponent"],
                _category_suggestions_category_suggestions_component__WEBPACK_IMPORTED_MODULE_20__["CategorySuggestionsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__["LeafletModule"].forRoot(),
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                ngx_icon_picker__WEBPACK_IMPORTED_MODULE_18__["IconPickerModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category-suggestions/category-suggestions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/category-suggestions/category-suggestions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card fxLayout=\"column\">\r\n\r\n  <mat-card-title fxFlex=\"10%\">Manage categories suggestions</mat-card-title>\r\n\r\n  <mat-card-content fxLayoutAlign=\"center center\">\r\n\r\n    <mat-selection-list role=\"listbox\"\r\n                        [(ngModel)]=\"selectedSuggestions\">\r\n      <mat-list-option *ngFor=\"let suggestion of suggestions\" role=\"option\"\r\n                       [ngClass]=\"getOptionClass(suggestion)\" [value]=\"suggestion\">\r\n        <div >\r\n          <i class=\"{{suggestion.category.iconClass}}\" style=\"margin-left: 1px; margin-right: 5px;\"></i>\r\n            {{suggestion.category.name}}\r\n        </div>\r\n      </mat-list-option>\r\n    </mat-selection-list>\r\n\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions fxLayout=\"row\" fxFlex=\"10%\" fxLayoutAlign=\"center center\">\r\n    <button mat-raised-button color=\"primary\" class=\"btn btn-success\"\r\n            [disabled]=\"selectedSuggestions.length == 0\" (click)=\"approve()\" >Approve</button>\r\n    <button mat-raised-button color=\"warn\" [disabled]=\"selectedSuggestions.length == 0\"\r\n            (click)=\"reject()\">Reject</button>\r\n  </mat-card-actions>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/category-suggestions/category-suggestions.component.sass":
/*!**************************************************************************!*\
  !*** ./src/app/category-suggestions/category-suggestions.component.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  margin: 1em; }\n\n.hidden-category {\n  background-color: #d1cecb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0ZWdvcnktc3VnZ2VzdGlvbnMvQzpcXFVzZXJzXFxubHVjZVxcRG9jdW1lbnRzXFxHb1xcc3JjXFxnaXRodWIuY29tXFxuaWNvbHVjZVxcYXJxd2ViL3NyY1xcYXBwXFxjYXRlZ29yeS1zdWdnZXN0aW9uc1xcY2F0ZWdvcnktc3VnZ2VzdGlvbnMuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5LXN1Z2dlc3Rpb25zL2NhdGVnb3J5LXN1Z2dlc3Rpb25zLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XG4gIG1hcmdpbjogMWVtOyB9XG5cbi5oaWRkZW4tY2F0ZWdvcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjZWNiOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/category-suggestions/category-suggestions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/category-suggestions/category-suggestions.component.ts ***!
  \************************************************************************/
/*! exports provided: CategorySuggestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySuggestionsComponent", function() { return CategorySuggestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_poi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/poi.service */ "./src/app/service/poi.service.ts");



var CategorySuggestionsComponent = /** @class */ (function () {
    function CategorySuggestionsComponent(poiService) {
        this.poiService = poiService;
    }
    CategorySuggestionsComponent.prototype.ngOnInit = function () {
        this.getPendingSuggestions();
        this.selectedSuggestions = [];
    };
    CategorySuggestionsComponent.prototype.getPendingSuggestions = function () {
        var _this = this;
        this.poiService.getPendingCategorySuggestions().subscribe(function (pendingSuggestions) {
            _this.suggestions = pendingSuggestions;
        });
    };
    CategorySuggestionsComponent.prototype.approve = function () {
        var _this = this;
        this.selectedSuggestions.forEach(function (suggestion) {
            _this.poiService.approveSuggestion(suggestion).subscribe(function () { return _this.getPendingSuggestions(); });
        });
    };
    CategorySuggestionsComponent.prototype.reject = function () {
        var _this = this;
        this.selectedSuggestions.forEach(function (suggestion) {
            _this.poiService.rejectSuggestion(suggestion).subscribe(function () { return _this.getPendingSuggestions(); });
        });
        // this.getPendingSuggestions();
    };
    CategorySuggestionsComponent.prototype.getOptionClass = function (suggestion) {
        if (suggestion.category.hidden) {
            return "hidden-category";
        }
        return "";
    };
    CategorySuggestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-suggestions',
            template: __webpack_require__(/*! ./category-suggestions.component.html */ "./src/app/category-suggestions/category-suggestions.component.html"),
            styles: [__webpack_require__(/*! ./category-suggestions.component.sass */ "./src/app/category-suggestions/category-suggestions.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_poi_service__WEBPACK_IMPORTED_MODULE_2__["PoiService"]])
    ], CategorySuggestionsComponent);
    return CategorySuggestionsComponent;
}());



/***/ }),

/***/ "./src/app/domain/category-suggestion.ts":
/*!***********************************************!*\
  !*** ./src/app/domain/category-suggestion.ts ***!
  \***********************************************/
/*! exports provided: CategorySuggestion, SuggestionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategorySuggestion", function() { return CategorySuggestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionStatus", function() { return SuggestionStatus; });
var CategorySuggestion = /** @class */ (function () {
    function CategorySuggestion(category, status) {
        this.category = category;
        this.status = status;
    }
    return CategorySuggestion;
}());

var SuggestionStatus;
(function (SuggestionStatus) {
    SuggestionStatus[SuggestionStatus["APPROVED"] = 0] = "APPROVED";
    SuggestionStatus[SuggestionStatus["WAITING_FOR_APPROVAL"] = 1] = "WAITING_FOR_APPROVAL";
    SuggestionStatus[SuggestionStatus["REJECTED"] = 2] = "REJECTED";
})(SuggestionStatus || (SuggestionStatus = {}));


/***/ }),

/***/ "./src/app/domain/category.ts":
/*!************************************!*\
  !*** ./src/app/domain/category.ts ***!
  \************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
var Category = /** @class */ (function () {
    function Category(id, name, hidden, iconClass) {
        this.id = id;
        this.name = name;
        this.hidden = hidden;
        this.iconClass = iconClass;
    }
    return Category;
}());



/***/ }),

/***/ "./src/app/domain/point-of-interest.ts":
/*!*********************************************!*\
  !*** ./src/app/domain/point-of-interest.ts ***!
  \*********************************************/
/*! exports provided: PointOfInterest, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointOfInterest", function() { return PointOfInterest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var PointOfInterest = /** @class */ (function () {
    function PointOfInterest() {
    }
    return PointOfInterest;
}());

var Image = /** @class */ (function () {
    function Image(data, name, contentType) {
        this.data = data;
        this.name = name;
        this.contentType = contentType;
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/domain/user.ts":
/*!********************************!*\
  !*** ./src/app/domain/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(username, password, isAdmin) {
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/edit-category/edit-category.component.html":
/*!************************************************************!*\
  !*** ./src/app/edit-category/edit-category.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\r\n</head>\r\n\r\n<mat-card>\r\n  <mat-card-title>Search category</mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <form #searchForm=\"ngForm\" fxLayout=\"row\" (ngSubmit)=\"getCategory()\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Name\" name=\"name\" required [(ngModel)]=\"searchCategoryName\">\r\n      </mat-form-field>\r\n\r\n      <mat-action-list>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"btn btn-success\"\r\n                [disabled]=\"!searchForm.form.valid\">Search</button>\r\n      </mat-action-list>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"category\" fxLayout=\"column\" fxLayoutGap=\"30px\" fxLayoutAlign=\"center center\">\r\n  <mat-card-title>Edit category</mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <form #editCategoryForm=\"ngForm\" fxLayout fxLayoutGap=\"10px\" (ngSubmit)=\"updateCategory()\" fxFlex=\"80%\" fxFlex.lt-md=\"100%\"\r\n    >\r\n      <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder=\"Id\" readonly name=\"id\" [(ngModel)]=\"category.id\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder=\"Name\" name=\"name\" [(ngModel)]=\"category.name\">\r\n        </mat-form-field>\r\n\r\n\r\n        <div fxLayout fxLayoutGap=\"20px\">\r\n          <mat-checkbox [(ngModel)]=\"category.hidden\" name=\"hidden\">Hide</mat-checkbox>\r\n\r\n        </div>\r\n\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-text\">\r\n            <i [ngClass]=\"category.iconClass\"></i>\r\n          </div>\r\n          <input type=\"text\" name=\"iconClass\" class=\"form-control\" placeholder=\"Icon\"\r\n                 [(ngModel)]=\"category.iconClass\"\r\n                 [iconPicker]=\"category.iconClass\"\r\n                 [ipWidth]=\"'250px'\"\r\n                 [ipPlaceHolder]=\"'Search an icon'\"\r\n                 [ipPosition]=\"'top'\"\r\n                 [ipIconPack]=\"['fa5']\"\r\n                 (iconPickerSelect)=\"onIconPickerSelect($event)\">\r\n        </div>\r\n\r\n\r\n\r\n        <mat-card-actions fxLayoutAlign=\"end\" align=\"center\">\r\n          <button mat-raised-button color=\"primary\" class=\"btn btn-success\" [disabled]=\"!editCategoryForm.form.valid\">Apply changes</button>\r\n          <button mat-raised-button color=\"accent\" (click)=\"cancelUpdateCategory()\">Cancel</button>\r\n          <button mat-raised-button color=\"warn\" (click)=\"deleteCategory()\">Delete category</button>\r\n        </mat-card-actions>\r\n\r\n      </mat-card-content>\r\n\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/edit-category/edit-category.component.sass":
/*!************************************************************!*\
  !*** ./src/app/edit-category/edit-category.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  margin: 10px; }\n\n.mat-card {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1jYXRlZ29yeS9DOlxcVXNlcnNcXG5sdWNlXFxEb2N1bWVudHNcXEdvXFxzcmNcXGdpdGh1Yi5jb21cXG5pY29sdWNlXFxhcnF3ZWIvc3JjXFxhcHBcXGVkaXQtY2F0ZWdvcnlcXGVkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0LWNhdGVnb3J5L2VkaXQtY2F0ZWdvcnkuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW46IDEwcHg7IH1cblxuLm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-category/edit-category.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/edit-category/edit-category.component.ts ***!
  \**********************************************************/
/*! exports provided: EditCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCategoryComponent", function() { return EditCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_poi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/poi.service */ "./src/app/service/poi.service.ts");



var EditCategoryComponent = /** @class */ (function () {
    function EditCategoryComponent(poiService) {
        this.poiService = poiService;
        this.fallbackIcon = "fas fa-question-sign";
    }
    EditCategoryComponent.prototype.ngOnInit = function () {
        this.searchCategoryName = '';
    };
    EditCategoryComponent.prototype.getCategory = function () {
        var _this = this;
        this.poiService.getCategory(this.searchCategoryName).subscribe(function (category) {
            _this.category = category[0];
        });
        this.icon = this.category.iconClass;
    };
    EditCategoryComponent.prototype.updateCategory = function () {
        var _this = this;
        this.poiService.updateCategory(this.category).subscribe(function (newCategory) {
            _this.category = newCategory;
        });
    };
    EditCategoryComponent.prototype.cancelUpdateCategory = function () {
        this.category = null;
    };
    EditCategoryComponent.prototype.deleteCategory = function () {
        var _this = this;
        this.poiService.deleteCategory(this.category.name).subscribe(function () {
            _this.category = null;
        });
    };
    EditCategoryComponent.prototype.onIconPickerSelect = function (newIcon) {
        this.category.iconClass = newIcon;
    };
    EditCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-category',
            template: __webpack_require__(/*! ./edit-category.component.html */ "./src/app/edit-category/edit-category.component.html"),
            styles: [__webpack_require__(/*! ./edit-category.component.sass */ "./src/app/edit-category/edit-category.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_poi_service__WEBPACK_IMPORTED_MODULE_2__["PoiService"]])
    ], EditCategoryComponent);
    return EditCategoryComponent;
}());



/***/ }),

/***/ "./src/app/edit-poi/edit-poi.component.html":
/*!**************************************************!*\
  !*** ./src/app/edit-poi/edit-poi.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Search point of interest</mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <form #searchForm=\"ngForm\" fxLayout=\"row\" (ngSubmit)=\"getPOIByTitle()\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" placeholder=\"Title\" name=\"title\" required [(ngModel)]=\"searchPOITitle\">\r\n      </mat-form-field>\r\n\r\n      <mat-action-list>\r\n        <button mat-raised-button color=\"primary\" type=\"submit\" class=\"btn btn-success\"\r\n                [disabled]=\"!searchForm.form.valid\">Search</button>\r\n      </mat-action-list>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"!POI && error\">\r\n  <mat-card-content>\r\n    <p>The point of interest you are looking for does not exist</p>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n<mat-card *ngIf=\"POI\" fxLayout fxLayoutGap=\"30px\">\r\n  <mat-card-title>Edit point of interest</mat-card-title>\r\n\r\n  <mat-card-content>\r\n    <form #editPOIForm=\"ngForm\" fxLayout fxLayoutGap=\"10px\" (ngSubmit)=\"updatePOI()\" fxFlex=\"80%\" fxFlex.lt-md=\"100%\"\r\n    >\r\n\r\n      <mat-card-content fxLayout=\"column\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"20px\">\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder=\"Title\" name=\"title\" required [(ngModel)]=\"POI.title\">\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Category\" required name=\"category\" [(ngModel)]=\"POI.category.name\">\r\n            <mat-option *ngFor=\"let category of availableCategories\" value=\"{{category.name.toLowerCase()}}\">\r\n              {{category.name | titlecase}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <textarea matInput placeholder=\"Description\" name=\"description\" [(ngModel)]=\"POI.description\"></textarea>\r\n        </mat-form-field>\r\n\r\n      </mat-card-content>\r\n\r\n      <mat-card-content fxLayout=\"column\"  fxLayoutGap=\"20px\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start center\">\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Latitude\" required name=\"lat\" [(ngModel)]=\"POI.lat\">\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n            <input matInput type=\"text\" placeholder=\"Longitude\" required name=\"long\" [(ngModel)]=\"POI.long\">\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"center end\" fxFlex fxLayoutGap=\"20px\" align=\"left\">\r\n          <button mat-raised-button color=\"primary\" [disabled]=\"!editPOIForm.form.valid\">Apply changes</button>\r\n          <button mat-raised-button color=\"warn\" (click)=\"cancelEditPOI()\">Cancel</button>\r\n        </mat-card-actions>\r\n\r\n      </mat-card-content>\r\n\r\n\r\n\r\n      <div fxLayout=\"column\">\r\n        <img *ngIf=\"POIPictureUrl\" [src]=\"POIPictureUrl\" class=\"picture\">\r\n        <p *ngIf=\"!POIPictureUrl\">No picture attached</p>\r\n        <div>\r\n          <input type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\">\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/edit-poi/edit-poi.component.sass":
/*!**************************************************!*\
  !*** ./src/app/edit-poi/edit-poi.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  margin: 10px; }\n\n.mat-card {\n  margin: 10px; }\n\n.picture {\n  max-width: 75%;\n  max-height: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1wb2kvQzpcXFVzZXJzXFxubHVjZVxcRG9jdW1lbnRzXFxHb1xcc3JjXFxnaXRodWIuY29tXFxuaWNvbHVjZVxcYXJxd2ViL3NyY1xcYXBwXFxlZGl0LXBvaVxcZWRpdC1wb2kuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZWRpdC1wb2kvZWRpdC1wb2kuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW46IDEwcHg7IH1cblxuLm1hdC1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4OyB9XG5cbi5waWN0dXJlIHtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIG1heC1oZWlnaHQ6IDc1JTsgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/edit-poi/edit-poi.component.ts":
/*!************************************************!*\
  !*** ./src/app/edit-poi/edit-poi.component.ts ***!
  \************************************************/
/*! exports provided: EditPoiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPoiComponent", function() { return EditPoiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_poi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/poi.service */ "./src/app/service/poi.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _domain_point_of_interest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/point-of-interest */ "./src/app/domain/point-of-interest.ts");





var EditPoiComponent = /** @class */ (function () {
    function EditPoiComponent(poiService, domSanitizer) {
        this.poiService = poiService;
        this.domSanitizer = domSanitizer;
    }
    EditPoiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchPOITitle = '';
        this.poiService.getCategories().subscribe(function (categories) {
            _this.availableCategories = categories;
        });
    };
    EditPoiComponent.prototype.getPOI = function () {
        var _this = this;
        this.poiService.Search(this.searchPOITitle).subscribe(function (POI) {
            if (POI.length == 0) {
                _this.error = true;
            }
            else {
                _this.POI = POI[0];
                _this.error = false;
                _this.updatePOIPictureUrl();
            }
        });
    };
    EditPoiComponent.prototype.updatePOIPictureUrl = function () {
        if (this.POI.picture.data) {
            this.POIPictureUrl = this.domSanitizer.bypassSecurityTrustResourceUrl("data:" + this.POI.picture.contentType + ";base64, " + this.POI.picture.data);
        }
    };
    EditPoiComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var reader = new FileReader();
        if (event.target.files && event.target.files.length > 0) {
            var file_1 = event.target.files[0];
            reader.readAsDataURL(file_1);
            reader.onload = function () {
                _this.POI.picture = new _domain_point_of_interest__WEBPACK_IMPORTED_MODULE_4__["Image"](reader.result.split(',')[1], file_1.name, file_1.type);
                _this.updatePOIPictureUrl();
            };
        }
    };
    EditPoiComponent.prototype.getPOIByTitle = function () {
        this.getPOI();
    };
    EditPoiComponent.prototype.updatePOI = function () {
        var _this = this;
        this.poiService.updatePOI(this.POI).subscribe(function () { return _this.getPOI; });
    };
    EditPoiComponent.prototype.cancelEditPOI = function () {
        this.POI = null;
    };
    EditPoiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-poi',
            template: __webpack_require__(/*! ./edit-poi.component.html */ "./src/app/edit-poi/edit-poi.component.html"),
            styles: [__webpack_require__(/*! ./edit-poi.component.sass */ "./src/app/edit-poi/edit-poi.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_poi_service__WEBPACK_IMPORTED_MODULE_2__["PoiService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], EditPoiComponent);
    return EditPoiComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section fxLayoutAlign=\"center center\">\r\n  <mat-tab-group mat-align-tabs=\"center\" animationDuration=\"0ms\" [(selectedIndex)]=\"selectedTabIndex\">\r\n    <mat-tab label=\"Login\">\r\n      <mat-card fxFlex=\"500px\" fxLayout=\"column\"  align=\"center\" fxFlex.xs=\"100%\" style=\"margin: 2em\">\r\n\r\n        <mat-card-content>\r\n          <form [formGroup]=\"loginControl\" (ngSubmit)=\"login(loginControl.value)\" fxFlex fxLayout=\"column\">\r\n\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" placeholder=\"Username\" required formControlName=\"username\">\r\n            </mat-form-field>\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" placeholder=\"Password\" required formControlName=\"password\">\r\n            </mat-form-field>\r\n\r\n            <mat-card-actions align=\"center\">\r\n              <button mat-raised-button color=\"primary\">Login</button>\r\n            </mat-card-actions>\r\n          </form>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"Sign Up\">\r\n        <mat-card fxFlex=\"500px\" fxLayout=\"column\"  align=\"center\" fxFlex.xs=\"100%\" style=\"margin: 2em\">\r\n\r\n          <mat-card-content>\r\n            <form [formGroup]=\"signUpControl\" (ngSubmit)=\"signUp(signUpControl.value)\" fxFlex fxLayout=\"column\">\r\n\r\n              <mat-form-field>\r\n                <input matInput type=\"text\" placeholder=\"Username\" required formControlName=\"username\">\r\n              </mat-form-field>\r\n              <mat-form-field>\r\n                <input matInput type=\"text\" placeholder=\"Password\" required formControlName=\"password\">\r\n              </mat-form-field>\r\n\r\n              <mat-card-actions align=\"center\">\r\n                <button mat-raised-button color=\"primary\">Sign up</button>\r\n              </mat-card-actions>\r\n            </form>\r\n          </mat-card-content>\r\n        </mat-card>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zYXNzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _domain_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/user */ "./src/app/domain/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)])
        });
        this.signUpControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)])
        });
        this.selectedTabIndex = 0; //Set login tab
    };
    LoginComponent.prototype.login = function (loginData) {
        var _this = this;
        this.loginService.login(new _domain_user__WEBPACK_IMPORTED_MODULE_4__["User"](loginData.username, loginData.password, false))
            .subscribe(
        //Go back to map view
        function (loggedUser) { return _this.router.navigateByUrl("/map"); });
    };
    LoginComponent.prototype.signUp = function (signUpData) {
        this.loginService.signUp(new _domain_user__WEBPACK_IMPORTED_MODULE_4__["User"](signUpData.username, signUpData.password, false)).subscribe();
        this.selectedTabIndex = 0;
        //TODO: show user creation popup
        //Allow quick login after signUp and reset signUp form
        this.loginControl.get("username").setValue(signUpData.username);
        this.loginControl.get("password").setValue(signUpData.password);
        this.signUpControl.get("username").setValue("");
        this.signUpControl.get("password").setValue("");
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/map/map.component.html":
/*!****************************************!*\
  !*** ./src/app/map/map.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-poi-filter (filterChange)=\"filterPOIs($event)\" fxFlex=\"75%\"></app-poi-filter>\r\n  <mat-card fxFlex>\r\n    <button mat-flat-button color=\"accent\" routerLink=\"/suggestion/category/new\">Suggest a new category</button>\r\n  </mat-card>\r\n</div>\r\n\r\n<div id=\"map\" class=\"map\"\r\n     leaflet\r\n     [leafletOptions]=\"initialSetup\"\r\n     [leafletLayersControl]=\"layersControl\"\r\n     (leafletMapReady)=\"onMapReady($event)\"\r\n     (leafletClick)=\"showSavePOIPopup($event.latlng)\">\r\n\r\n  <div *ngFor=\"let l of layers\" [leafletLayer]=\"l\"></div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"addingNewPOI\">\r\n  <app-add-marker-form [marker]=\"this.newMarker\"\r\n                       (addedPOI)=\"onPOIAdd($event)\"\r\n                       (cancelPOI)=\"hideNewPOIForm()\"\r\n                       #addMarkerComponent> </app-add-marker-form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/map/map.component.sass":
/*!****************************************!*\
  !*** ./src/app/map/map.component.sass ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\n  height: 50%;\n  padding: 0;\n  margin: 10px; }\n\n.leaflet-popup-content-wrapper {\n  background-color: #e56d68;\n  opacity: .8;\n  width: 200px; }\n\n.leaflet-popup-tip {\n  background-color: #e5e5e5;\n  opacity: .8; }\n\n.leaflet-popup-content {\n  color: #191900;\n  text-align: left;\n  font-family: 'Roboto Slab', serif;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwL0M6XFxVc2Vyc1xcbmx1Y2VcXERvY3VtZW50c1xcR29cXHNyY1xcZ2l0aHViLmNvbVxcbmljb2x1Y2VcXGFycXdlYi9zcmNcXGFwcFxcbWFwXFxtYXAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVksRUFBQTs7QUFPZDtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21hcC9tYXAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMTBweDsgfVxuXG4vLy5oMywgLmgyXG4vLyAgbWFyZ2luLXRvcDogMFxuLy8gIG1hcmdpbi1ib3R0b206IDBcbi8vICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZVxuXG4ubGVhZmxldC1wb3B1cC1jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU2ZDY4O1xuICBvcGFjaXR5OiAuODtcblxuICB3aWR0aDogMjAwcHg7IH1cblxuXG4ubGVhZmxldC1wb3B1cC10aXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xuICBvcGFjaXR5OiAuODsgfVxuXG5cbi5sZWFmbGV0LXBvcHVwLWNvbnRlbnQge1xuICBjb2xvcjogIzE5MTkwMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNlcmlmO1xuICBmb250LXNpemU6IDEycHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/map/map.component.ts":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _add_marker_form_add_marker_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-marker-form/add-marker-form.component */ "./src/app/add-marker-form/add-marker-form.component.ts");
/* harmony import */ var _service_poi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/poi.service */ "./src/app/service/poi.service.ts");






var MapComponent = /** @class */ (function () {
    function MapComponent(cdRef, poiService) {
        this.cdRef = cdRef;
        this.poiService = poiService;
        this.wMaps = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
            detectRetina: true,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        this.streetMaps = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["tileLayer"])('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            detectRetina: true,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        this.addingNewPOI = false;
    }
    MapComponent_1 = MapComponent;
    Object.defineProperty(MapComponent.prototype, "markerComponent", {
        //Use @ViewChild to inject child component. Using setter
        //because of the *ngIf in the html template.
        set: function (addMarkerComponent) {
            this.addMarkerComponent = addMarkerComponent;
            this.cdRef.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngOnInit = function () {
        this.initialSetup = {
            layers: [
                this.streetMaps
            ],
            zoom: 15,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLng"])([-34.581199, -58.421058])
        };
        this.layersControl = {
            baseLayers: {
                "Street": this.streetMaps,
                "Wikimedia": this.wMaps
            },
            overlays: {}
        };
        this.layers = [];
    };
    MapComponent.prototype.onMapReady = function (map) {
        var _this = this;
        this.map = map;
        this.poiService.Search(null, null, 20, this.map.getBounds(), false).subscribe(function (POIs) {
            var layers = [];
            POIs.forEach(function (POI) {
                layers.push(MapComponent_1.POIToMarker(POI));
            });
            _this.layers = layers;
        });
    };
    MapComponent.prototype.showSavePOIPopup = function (latLong) {
        var _this = this;
        if (this.addingNewPOI) {
            //Remove last marker
            this.layers.pop();
        }
        var newMarker = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["marker"])(latLong, {
            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            }),
            clickable: true,
            draggable: true,
            riseOnHover: true
        });
        this.layers.push(newMarker);
        this.newMarker = newMarker;
        //Zoom on marker when clicked
        this.newMarker.on("click", function (me) {
            var latLng = [me.latlng];
            // noinspection JSPotentiallyInvalidUsageOfClassThis
            this.map.fitBounds(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLngBounds"](latLng), { maxZoom: 15 });
        }, { map: this.map });
        this.addingNewPOI = true;
        //Subscribes add-marker component to the new marker to track coordinates
        //SetTimeout is used to give time for the @ViewChild to set the component
        //after the *ngIf activation
        setTimeout(function () { return _this.addMarkerComponent.resetPOIForm(); }, 1);
        //Set map on top of screen to give more space to the add POI form
        setTimeout(function () { return document.getElementById("map").scrollIntoView(true); }, 100);
    };
    MapComponent.prototype.hideNewPOIForm = function (removeLastLayer) {
        if (removeLastLayer === void 0) { removeLastLayer = true; }
        this.addingNewPOI = false;
        if (removeLastLayer) {
            this.layers.pop();
        }
    };
    MapComponent.prototype.onPOIAdd = function (savedPOI) {
        this.hideNewPOIForm(false);
        this.newMarker.bindPopup(MapComponent_1.markerPopupHtml(savedPOI), { maxWidth: 700, className: 'popup' });
        this.newMarker.dragging.disable();
        var newIcon = Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
            iconUrl: MapComponent_1.setMarkerIconUrl,
            shadowUrl: MapComponent_1.setMarkerShadowUrl
        });
        this.newMarker.setIcon(newIcon);
    };
    MapComponent.markerPopupHtml = function (POI) {
        var html = " \n<head>\n    <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\n</head>\n<h2>" + this.toTitleCase(POI.title) + "</h2>\n<h3>" + this.toTitleCase(POI.category.name) + " <i class=\"" + POI.category.iconClass + "\"></i></h3>  \n<p>Description: " + POI.description + "</p>\n";
        if (POI.picture.data) {
            html = html + ("<img src=\"data:" + POI.picture.contentType + ";base64, " + POI.picture.data + "\" style=\"width: 100px\" style=\"height: 45px\" \"/>");
        }
        return html;
    };
    MapComponent.toTitleCase = function (str) {
        if (str) {
            return str.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        else {
            return "";
        }
    };
    /**
     * Filters the layers in the map.
     *
     * @param poiFilters object with the values from {@link POIFilterComponent#filtersControl}.
     */
    MapComponent.prototype.filterPOIs = function (poiFilters) {
        var _this = this;
        var category = poiFilters.category;
        var title = poiFilters.title;
        var markerLimit = 20; //Arbitrary marker limit
        var bounds = this.map.getBounds();
        this.layers = [];
        this.poiService.Search(title, category, markerLimit, bounds, false).subscribe(function (searchResult) { return searchResult.forEach(function (POI) {
            _this.layers.push(MapComponent_1.POIToMarker(POI));
        }, _this); });
    };
    MapComponent.POIToMarker = function (POI) {
        var marker = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"]([POI.lat, POI.long], {
            draggable: false,
            clickable: true,
            riseOnHover: true,
            icon: Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["icon"])({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: this.setMarkerIconUrl,
                shadowUrl: this.setMarkerShadowUrl,
            }),
            title: POI.title
        });
        marker.bindPopup(MapComponent_1.markerPopupHtml(POI), { maxWidth: 700, className: 'popup' });
        return marker;
    };
    var MapComponent_1;
    MapComponent.setMarkerIconUrl = 'leaflet/marker-icon.png';
    MapComponent.setMarkerShadowUrl = 'leaflet/marker-shadow.png';
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addMarkerComponent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _add_marker_form_add_marker_form_component__WEBPACK_IMPORTED_MODULE_3__["AddMarkerFormComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_add_marker_form_add_marker_form_component__WEBPACK_IMPORTED_MODULE_3__["AddMarkerFormComponent"]])
    ], MapComponent.prototype, "markerComponent", null);
    MapComponent = MapComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.sass */ "./src/app/map/map.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _service_poi_service__WEBPACK_IMPORTED_MODULE_4__["PoiService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/navigation-toolbar/navigation-toolbar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/navigation-toolbar/navigation-toolbar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n\r\n  <a *ngIf=\"loggedUser && loggedUser.isAdmin\" (click)=\"toggleSidenav()\" class=\"sidenav-toggle\">\r\n    <mat-icon>build</mat-icon>\r\n  </a>\r\n\r\n  <span>\r\n    <a routerLink=\"/map\" class=\"home\"> {{appTitle}}</a>\r\n  </span>\r\n\r\n  <span fxFlex fxLayoutAlign=\"end\">\r\n    <div *ngIf=\"!loggedUser\">\r\n      <span>\r\n        <a routerLink=\"/login\" class=\"login\">Login</a>\r\n      </span>\r\n      <span>\r\n        <a class=\"login\" (click)=\"logAdmin()\">Log admin</a>\r\n      </span>\r\n    </div>\r\n\r\n    <div *ngIf=\"loggedUser\">\r\n      <a [matMenuTriggerFor]=\"menu\" class=\"logout\">\r\n          <span>\r\n            {{loggedUser.username}}\r\n            <mat-icon style=\"margin-bottom: 0\">account_circle</mat-icon>\r\n          </span>\r\n      </a>\r\n      <mat-menu #menu=\"matMenu\" xPosition=\"before\" >\r\n        <a mat-menu-item (click)=\"logOut()\">\r\n          <mat-icon>exit_to_app</mat-icon>\r\n          <span>Logout</span>\r\n        </a>\r\n      </mat-menu>\r\n\r\n    </div>\r\n\r\n\r\n  </span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/navigation-toolbar/navigation-toolbar.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/navigation-toolbar/navigation-toolbar.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login, .login:visited {\n  color: white;\n  text-decoration: none;\n  margin: 1em;\n  cursor: pointer; }\n\n.login:hover {\n  color: black; }\n\n.home {\n  color: white;\n  text-decoration: none; }\n\n.logout {\n  cursor: pointer; }\n\n.sidenav-toggle {\n  margin-right: 1em;\n  cursor: pointer; }\n\n.mat-icon {\n  vertical-align: middle; }\n\n.icon-text {\n  display: flex;\n  align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi10b29sYmFyL0M6XFxVc2Vyc1xcbmx1Y2VcXERvY3VtZW50c1xcR29cXHNyY1xcZ2l0aHViLmNvbVxcbmljb2x1Y2VcXGFycXdlYi9zcmNcXGFwcFxcbmF2aWdhdGlvbi10b29sYmFyXFxuYXZpZ2F0aW9uLXRvb2xiYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlLEVBQUE7O0FBRWpCO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQUV2QjtFQUNFLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxpQkFBaUI7RUFDakIsZUFBZSxFQUFBOztBQUVqQjtFQUNFLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24tdG9vbGJhci9uYXZpZ2F0aW9uLXRvb2xiYXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4sIC5sb2dpbjp2aXNpdGVkIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLmxvZ2luOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrOyB9XG5cbi5ob21lIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLmxvZ291dCB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uc2lkZW5hdi10b2dnbGUge1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cblxuLmljb24tdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/navigation-toolbar/navigation-toolbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/navigation-toolbar/navigation-toolbar.component.ts ***!
  \********************************************************************/
/*! exports provided: NavigationToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationToolbarComponent", function() { return NavigationToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/login.service */ "./src/app/service/login.service.ts");
/* harmony import */ var _domain_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/user */ "./src/app/domain/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NavigationToolbarComponent = /** @class */ (function () {
    function NavigationToolbarComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.appTitle = 'Map Ui';
        this.sidenavToggled = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavigationToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Remember logged user
        this.loginService.getLoggedUser().subscribe(function (loggedUser) {
            _this.loggedUser = loggedUser;
        });
        //Subscribe to new logins
        this.loginService.userLogged.subscribe(function (loggedUser) {
            _this.loggedUser = loggedUser;
        });
        //Subscribe to logouts
        this.loginService.userLoggedOut.subscribe(function () {
            _this.loggedUser = null;
        });
    };
    NavigationToolbarComponent.prototype.logOut = function () {
        this.loginService.logOut();
        this.router.navigateByUrl("/");
    };
    //TODO: delete
    NavigationToolbarComponent.prototype.logAdmin = function () {
        var _this = this;
        this.loginService.signUp(new _domain_user__WEBPACK_IMPORTED_MODULE_3__["User"]("Fernet", "pass", true)).subscribe(function () {
            _this.loginService.login(new _domain_user__WEBPACK_IMPORTED_MODULE_3__["User"]("Fernet", "pass", null)).subscribe(function () { return _this.router.navigateByUrl("/"); });
        });
    };
    NavigationToolbarComponent.prototype.toggleSidenav = function () {
        this.sidenavToggled.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavigationToolbarComponent.prototype, "sidenavToggled", void 0);
    NavigationToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-toolbar',
            template: __webpack_require__(/*! ./navigation-toolbar.component.html */ "./src/app/navigation-toolbar/navigation-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-toolbar.component.sass */ "./src/app/navigation-toolbar/navigation-toolbar.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NavigationToolbarComponent);
    return NavigationToolbarComponent;
}());



/***/ }),

/***/ "./src/app/new-category-suggestion-form/new-category-suggestion-form.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/new-category-suggestion-form/new-category-suggestion-form.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\" integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\r\n</head>\r\n\r\n<mat-card fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n  <mat-card-header>\r\n    <mat-card-title>Suggest a category</mat-card-title>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <form [formGroup]=\"categorySuggestionFrom\" (ngSubmit)=\"suggestNewCategory(categorySuggestionFrom.value)\"\r\n          fxLayout=\"column\" fxFlex=\"100%\" fxFlex.lt-md=\"100%\">\r\n\r\n      <mat-card-content fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\r\n        <mat-form-field>\r\n          <input matInput type=\"text\" placeholder=\"Name\" required formControlName=\"name\">\r\n        </mat-form-field>\r\n\r\n        <div fxLayout fxLayoutGap=\"20px\">\r\n          <mat-checkbox formControlName=\"hidden\">Hide</mat-checkbox>\r\n        </div>\r\n\r\n        <div class=\"input-group\" fxFlex=\"30%\">\r\n          <div class=\"input-group-text\">\r\n            <i [ngClass]=\"categorySuggestionFrom.value.iconClass\"></i>\r\n          </div>\r\n          <input type=\"text\" name=\"iconClass\" class=\"form-control\" placeholder=\"Icon\" formControlName=\"iconClass\"\r\n                 [iconPicker]=\"\"\r\n                 [ipWidth]=\"'250px'\"\r\n                 [ipPlaceHolder]=\"'Search an icon'\"\r\n                 [ipPosition]=\"'bottom'\"\r\n                 [ipIconPack]=\"['fa5']\"\r\n                 [ipFallbackIcon]=\"'fas fa-question-circle'\"\r\n                 (iconPickerSelect)=\"onIconPickerSelect($event)\"  >\r\n        </div>\r\n\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions align=\"center\">\r\n        <button mat-raised-button color=\"primary\" class=\"btn btn-success\" [disabled]=\"!categorySuggestionFrom.valid\">Add</button>\r\n        <button mat-raised-button color=\"warn\" (click)=\"cancelNewCategorySuggestion()\">Back</button>\r\n      </mat-card-actions>\r\n\r\n    </form>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/new-category-suggestion-form/new-category-suggestion-form.component.sass":
/*!******************************************************************************************!*\
  !*** ./src/app/new-category-suggestion-form/new-category-suggestion-form.component.sass ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy1jYXRlZ29yeS1zdWdnZXN0aW9uLWZvcm0vbmV3LWNhdGVnb3J5LXN1Z2dlc3Rpb24tZm9ybS5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/new-category-suggestion-form/new-category-suggestion-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/new-category-suggestion-form/new-category-suggestion-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NewCategorySuggestionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCategorySuggestionFormComponent", function() { return NewCategorySuggestionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_poi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/poi.service */ "./src/app/service/poi.service.ts");
/* harmony import */ var _domain_category_suggestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/category-suggestion */ "./src/app/domain/category-suggestion.ts");
/* harmony import */ var _domain_category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/category */ "./src/app/domain/category.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var NewCategorySuggestionFormComponent = /** @class */ (function () {
    function NewCategorySuggestionFormComponent(poiService, location) {
        this.poiService = poiService;
        this.location = location;
    }
    NewCategorySuggestionFormComponent.prototype.ngOnInit = function () {
        this.categorySuggestionFrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            hidden: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            iconClass: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)])
        });
    };
    NewCategorySuggestionFormComponent.prototype.onIconPickerSelect = function (newIcon) {
        this.categorySuggestionFrom.get("iconClass").setValue(newIcon);
    };
    NewCategorySuggestionFormComponent.prototype.suggestNewCategory = function (categorySuggestionFrom) {
        var newCategorySuggestion = new _domain_category_suggestion__WEBPACK_IMPORTED_MODULE_4__["CategorySuggestion"](new _domain_category__WEBPACK_IMPORTED_MODULE_5__["Category"](null, categorySuggestionFrom.name, categorySuggestionFrom.hidden, categorySuggestionFrom.iconClass), _domain_category_suggestion__WEBPACK_IMPORTED_MODULE_4__["SuggestionStatus"].WAITING_FOR_APPROVAL);
        this.poiService.sendCategorySuggestion(newCategorySuggestion).subscribe(function () { });
    };
    NewCategorySuggestionFormComponent.prototype.cancelNewCategorySuggestion = function () {
        this.location.back();
    };
    NewCategorySuggestionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-category-suggestion-form',
            template: __webpack_require__(/*! ./new-category-suggestion-form.component.html */ "./src/app/new-category-suggestion-form/new-category-suggestion-form.component.html"),
            styles: [__webpack_require__(/*! ./new-category-suggestion-form.component.sass */ "./src/app/new-category-suggestion-form/new-category-suggestion-form.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_poi_service__WEBPACK_IMPORTED_MODULE_3__["PoiService"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], NewCategorySuggestionFormComponent);
    return NewCategorySuggestionFormComponent;
}());



/***/ }),

/***/ "./src/app/poi-filter/poi-filter.component.html":
/*!******************************************************!*\
  !*** ./src/app/poi-filter/poi-filter.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Filters</mat-card-title>\r\n\r\n  <mat-card-content>\r\n\r\n    <form [formGroup]=\"filtersControl\" (ngSubmit)=\"updateFilters(filtersControl.value)\">\r\n\r\n      <mat-form-field>\r\n        <input type=\"text\" placeholder=\"Title\" matInput formControlName=\"title\">\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input type=\"text\" placeholder=\"Category\" aria-label=\"Number\" matInput formControlName=\"category\" [matAutocomplete]=\"auto\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let option of filteredCategoryOptions | async\" [value]=\"option\">\r\n            {{option}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n\r\n      <button mat-raised-button color=\"primary\" [disabled]=\"!filtersControl.valid\"> Filter </button>\r\n\r\n    </form>\r\n  </mat-card-content>\r\n\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/poi-filter/poi-filter.component.sass":
/*!******************************************************!*\
  !*** ./src/app/poi-filter/poi-filter.component.sass ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  margin: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pLWZpbHRlci9DOlxcVXNlcnNcXG5sdWNlXFxEb2N1bWVudHNcXEdvXFxzcmNcXGdpdGh1Yi5jb21cXG5pY29sdWNlXFxhcnF3ZWIvc3JjXFxhcHBcXHBvaS1maWx0ZXJcXHBvaS1maWx0ZXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb2ktZmlsdGVyL3BvaS1maWx0ZXIuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW46IDEwcHg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/poi-filter/poi-filter.component.ts":
/*!****************************************************!*\
  !*** ./src/app/poi-filter/poi-filter.component.ts ***!
  \****************************************************/
/*! exports provided: POIFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POIFilterComponent", function() { return POIFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * @title Filter autocomplete
 */
var POIFilterComponent = /** @class */ (function () {
    function POIFilterComponent() {
        this.availableCategories = ['Any', 'Food', 'Entertainment', 'Art', 'Museum'];
        this.filterChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    POIFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filtersControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Any", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Any", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)])
        });
        this.filteredCategoryOptions = this.filtersControl.get("category").valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
    };
    POIFilterComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.availableCategories.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    //Only emits category, but could be extended with other filters
    POIFilterComponent.prototype.updateFilters = function (filtersControl) {
        this.filterChange.emit(filtersControl);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], POIFilterComponent.prototype, "filterChange", void 0);
    POIFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-poi-filter',
            template: __webpack_require__(/*! ./poi-filter.component.html */ "./src/app/poi-filter/poi-filter.component.html"),
            styles: [__webpack_require__(/*! ./poi-filter.component.sass */ "./src/app/poi-filter/poi-filter.component.sass")]
        })
    ], POIFilterComponent);
    return POIFilterComponent;
}());



/***/ }),

/***/ "./src/app/service/auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/service/login.service.ts");




/**
 * Protects urls from accessing without permission.
 */
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.adminUrls = ["/administration/edit/poi", "/administration/edit/category",
            "/administration/suggestion/category/new"];
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (this.adminUrls.includes(state.url)) {
            var isAdmin_1 = false;
            this.loginService.getLoggedUser().subscribe(function (loggedUser) {
                isAdmin_1 = loggedUser.isAdmin;
            });
            if (!isAdmin_1) {
                return this.router.parseUrl("/"); //Redirect to home
            }
            else {
                return true; //Allow entry to backoffice
            }
        }
        else {
            return true;
        }
    };
    AuthGuardService.prototype.canActivateChild = function (route, state) {
        if (this.adminUrls.includes(state.url)) {
            var isAdmin_2 = false;
            this.loginService.getLoggedUser().subscribe(function (loggedUser) {
                isAdmin_2 = loggedUser.isAdmin;
            });
            if (!isAdmin_2) {
                return this.router.parseUrl("/"); //Redirect to home
            }
            else {
                return true; //Allow entry to backoffice
            }
        }
        else {
            return true;
        }
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/login.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/login.service.ts ***!
  \******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/user */ "./src/app/domain/user.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.userLogged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.userLoggedOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loggedUserKey = "loggedUser";
    }
    LoginService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/user/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            console.log("Login error");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (loggedUser) {
            window.localStorage.setItem(_this.loggedUserKey, JSON.stringify(loggedUser));
            _this.userLogged.emit(loggedUser);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedUser);
        }));
    };
    LoginService.prototype.signUp = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "/user/signup", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
            console.log("Signup error");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
        }));
    };
    LoginService.prototype.logOut = function () {
        var user = JSON.parse(window.localStorage.getItem(this.loggedUserKey));
        window.localStorage.removeItem(this.loggedUserKey);
        this.userLoggedOut.emit(user); //Emit who logged out
    };
    LoginService.prototype.getLoggedUser = function () {
        var loggedUserJson = window.localStorage.getItem(this.loggedUserKey);
        if (loggedUserJson) {
            var parsedJson = JSON.parse(loggedUserJson);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _domain_user__WEBPACK_IMPORTED_MODULE_2__["User"](parsedJson.username, parsedJson.password, parsedJson.isAdmin));
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginService.prototype, "userLogged", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginService.prototype, "userLoggedOut", void 0);
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/poi.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/poi.service.ts ***!
  \****************************************/
/*! exports provided: PoiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PoiService", function() { return PoiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _domain_category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/category */ "./src/app/domain/category.ts");
/* harmony import */ var _domain_category_suggestion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../domain/category-suggestion */ "./src/app/domain/category-suggestion.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var PoiService = /** @class */ (function () {
    function PoiService(http) {
        this.http = http;
    }
    PoiService_1 = PoiService;
    //Saves the POI in the backend
    PoiService.prototype.savePOI = function (POI) {
        var POIGeoJSON = PoiService_1.POIToGeoJSON(POI);
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/poi", POIGeoJSON);
    };
    //Converts a POI to a GeoJSON
    PoiService.POIToGeoJSON = function (POI) {
        return {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [POI.lat, POI.long]
            },
            properties: {
                "title": POI.title,
                "category": POI.category.name,
                "description": POI.description,
                "picture": {
                    "data": POI.picture.data,
                    "name": POI.picture.name,
                    "contentType": POI.picture.contentType
                },
                "hidden": POI.hidden
            }
        };
    };
    PoiService.prototype.Search = function (title, categoryName, markerLimit, bounds, showHiddenCategories) {
        var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (title && !(title === "Any")) {
            queryParams = queryParams.append("title", title);
        }
        if (markerLimit) {
            queryParams = queryParams.append("limit", String(markerLimit));
        }
        if (categoryName && !(categoryName === "Any")) {
            queryParams = queryParams.append("categoryName", categoryName);
        }
        if (bounds) {
            var westLong = bounds.getWest();
            var eastLong = bounds.getEast();
            var northLat = bounds.getNorth();
            var southLat = bounds.getSouth();
            queryParams = queryParams.append("west_long", String(westLong));
            queryParams = queryParams.append("east_long", String(eastLong));
            queryParams = queryParams.append("north_lat", String(northLat));
            queryParams = queryParams.append("south_lat", String(southLat));
            queryParams = queryParams.append("bound", String(true));
        }
        if (showHiddenCategories) {
            queryParams = queryParams.append("hidden", String(true));
        }
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/poi/search", { params: queryParams });
    };
    PoiService.prototype.updatePOI = function (POI) {
        var poiBody = {
            id: POI.id,
            title: POI.title,
            category: POI.category.name,
            description: POI.description,
            picture: {
                data: POI.picture.data,
                name: POI.picture.name,
                contentType: POI.picture.contentType
            },
            hidden: POI.hidden,
            lat: POI.lat,
            long: POI.long
        };
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + ("/poi/" + POI.id), poiBody);
    };
    PoiService.prototype.getCategories = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/categories");
    };
    PoiService.prototype.getCategory = function (name) {
        var queryParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        queryParams = queryParams.append("name", name);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/categories/search", { params: queryParams });
    };
    PoiService.prototype.updateCategory = function (category) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + ("/category/" + category.id), category);
    };
    PoiService.prototype.deleteCategory = function (categoryName) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + ("/category/" + categoryName));
    };
    PoiService.prototype.sendCategorySuggestion = function (categorySuggestion) {
        var suggestion = {
            name: categorySuggestion.category.name,
            hidden: categorySuggestion.category.hidden,
            iconClass: categorySuggestion.category.iconClass,
            status: _domain_category_suggestion__WEBPACK_IMPORTED_MODULE_5__["SuggestionStatus"][categorySuggestion.status]
        };
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/suggestions/categories/new", suggestion);
    };
    PoiService.prototype.getPendingCategorySuggestions = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/suggestions/categories/new").pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(10)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (suggestionDtoList) {
            var suggestions = [];
            suggestionDtoList.forEach(function (suggestionDto) {
                var category = new _domain_category__WEBPACK_IMPORTED_MODULE_4__["Category"](null, suggestionDto.name, suggestionDto.hidden, suggestionDto.iconClass);
                var newSuggestion = new _domain_category_suggestion__WEBPACK_IMPORTED_MODULE_5__["CategorySuggestion"](category, suggestionDto.status);
                newSuggestion.id = suggestionDto.id;
                suggestions.push(newSuggestion);
            });
            return suggestions;
        }));
    };
    PoiService.prototype.approveSuggestion = function (suggestion) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + ("/suggestions/categories/new/" + suggestion.id + "/approve"), null);
    };
    PoiService.prototype.rejectSuggestion = function (suggestion) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + ("/suggestions/categories/new/" + suggestion.id + "/reject"), null);
    };
    var PoiService_1;
    PoiService = PoiService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PoiService);
    return PoiService;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item routerLink=\"/administration/edit/poi\" (click)=\"onSidenavClose()\">\r\n    <mat-icon>pin_drop</mat-icon> <span class=\"sidenav-content\">Edit POI</span>\r\n  </a>\r\n\r\n  <a mat-list-item routerLink=\"/administration/edit/category\" (click)=\"onSidenavClose()\">\r\n    <mat-icon>category</mat-icon> <span class=\"sidenav-content\">Edit category</span>\r\n  </a>\r\n\r\n  <a mat-list-item routerLink=\"/administration/suggestion/category/new\" (click)=\"onSidenavClose()\">\r\n    <mat-icon>check_circle</mat-icon> <span class=\"sidenav-content\">Category suggestions</span>\r\n  </a>\r\n\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.sass":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.sass ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-content {\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9DOlxcVXNlcnNcXG5sdWNlXFxEb2N1bWVudHNcXEdvXFxzcmNcXGdpdGh1Yi5jb21cXG5pY29sdWNlXFxhcnF3ZWIvc3JjXFxhcHBcXHNpZGVuYXZcXHNpZGVuYXYuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYvc2lkZW5hdi5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDVweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.onSidenavClose = function () {
        this.sidenavClose.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SidenavComponent.prototype, "sidenavClose", void 0);
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.sass */ "./src/app/sidenav/sidenav.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: "/api"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nluce\Documents\Go\src\github.com\nicoluce\arqweb\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map