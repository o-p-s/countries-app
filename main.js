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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#content{\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    height: 10vh;\r\n    background:#fff;  \r\n  }\r\n  /* ---------------------------------------------------\r\n      NAVIGATION MENU\r\n  ----------------------------------------------------- */\r\n  #content .navbar {\r\n    display: inline-flex;\r\n    background:#fff;  \r\n    width: 100%;\r\n    padding: 10px 0;\r\n    z-index:1;\r\n    position: fixed;\r\n    border:none;\r\n    border-bottom: 2px solid #00b0ff;\r\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n}\r\n  #content .navbar .menu{\r\n  display: inline-flex;\r\n  align-self: center;\r\n  list-style: none;\r\n  margin-bottom: 0;\r\n}\r\n  #content .navbar .menu .navbar-items{\r\n  font-family: 'Source Sans Pro', sans-serif;\r\n  text-align: center;\r\n  padding: 2vh 1.5vw;\r\n  border-radius: 5%;\r\n  background: white;\r\n  font-weight:600;\r\n}\r\n  #content .navbar .menu .navbar-items:hover{\r\n  background: #00b0ff;\r\n}\r\n  #content .navbar .search-box{\r\n  display: flex;\r\n  padding: 1vh 1vw 1vh 1vw;\r\n  position: absolute;\r\n  align-self: center;\r\n  right: 10%;\r\n  width: 20%;\r\n  border:none;\r\n  border-bottom: 1px solid #757575;\r\n}\r\n  #content .navbar .home{\r\n  padding:  0 1vw;\r\n}\r\n  #content .navbar .home img{\r\n  align-self: baseline;\r\n  height: 45px;\r\n  width: 60px;\r\n}\r\n  /* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n  @media (max-width: 768px) {\r\n\r\n    #content .navbar .menu .hide-items {\r\n      display: none;\r\n      }\r\n    #content .navbar .search-box{\r\n      width: 50%;\r\n    }\r\n    }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"appService.getNavbarState()\" id=\"content\">\r\n    <nav class=\"navbar top-nav navbar-static-top\">\r\n        <ul class=\"menu\">\r\n            <li>\r\n                <div class=\"home\" [routerLink]=\"['/']\">\r\n                    <img src=\"assets/menu/home.png\" alt=\"Home-Navigation\">\r\n                </div>\r\n            </li>\r\n            <li *ngFor=\"let region of regions\">\r\n                <div class=\"navbar-items hide-items\" [routerLink]=\"['/region',region.regionName,'countries']\">\r\n                    {{region.regionName | uppercase}}\r\n                </div>\r\n            </li>\r\n        </ul>\r\n        <input type=\"text\" class=\"search-box\" placeholder=\"Search (not implemented)\" >\r\n    </nav>\r\n</div>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(appService) {
        var _this = this;
        this.appService = appService;
        this.getCountries = function (name) {
            _this.appService.getCountriesFromRegion(name);
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.regions = this.appService.getRegions();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _regions_allregions_allregions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./regions/allregions/allregions.component */ "./src/app/regions/allregions/allregions.component.ts");
/* harmony import */ var _regions_regions_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./regions/regions.module */ "./src/app/regions/regions.module.ts");
/* harmony import */ var _countries_countries_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./countries/countries.module */ "./src/app/countries/countries.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _regions_allregions_allregions_component__WEBPACK_IMPORTED_MODULE_8__["AllRegionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _regions_regions_module__WEBPACK_IMPORTED_MODULE_9__["RegionsModule"],
                _countries_countries_module__WEBPACK_IMPORTED_MODULE_10__["CountriesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    { path: 'regions', component: _regions_allregions_allregions_component__WEBPACK_IMPORTED_MODULE_8__["AllRegionsComponent"] },
                    { path: '', redirectTo: 'regions', pathMatch: 'full' },
                    { path: '*', component: _regions_allregions_allregions_component__WEBPACK_IMPORTED_MODULE_8__["AllRegionsComponent"] },
                    { path: '**', component: _regions_allregions_allregions_component__WEBPACK_IMPORTED_MODULE_8__["AllRegionsComponent"] },
                ])
            ],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = "https://restcountries.eu";
        this.navbarOpen = true;
        this.setCountryInLocalStorage = function (country) {
            localStorage.setItem(country.name, JSON.stringify(country));
        };
        this.getCountryFromLocalStroage = function (name) {
            return JSON.parse(localStorage.getItem(name));
        };
    }
    AppService.prototype.getCountriesFromRegion = function (name) {
        return this.http.get(this.url + "/rest/v2/region/" + name);
    };
    AppService.prototype.getCountriesFromCurrency = function (code) {
        return this.http.get(this.url + "/rest/v2/currency/" + code);
    };
    AppService.prototype.getCountriesFromLanguage = function (code) {
        return this.http.get(this.url + "/rest/v2/lang/" + code);
    };
    AppService.prototype.clearLocalStorage = function () {
        localStorage.clear();
    };
    AppService.prototype.getRegions = function () {
        return [
            { regionName: 'asia', regionImageUrl: 'assets/regions/Asia.png', shortInfo: 'Spanning the eastern, southern and notheren hemispheres, it covers an area of 44,579,000 sq. km (17,212,000 sq mi) and has a population of 446.27 crores.' },
            { regionName: 'americas', regionImageUrl: 'assets/regions/America.png', shortInfo: 'Spanning the western, southern and notheren hemispheres, it covers an area of 42,549,000 sq. km (16,428,000 sq mi) and has a population of 32.57 crores.' },
            { regionName: 'africa', regionImageUrl: 'assets/regions/Africa.png', shortInfo: 'Spanning the eastern, southern and notheren hemispheres, it covers an area of 30,370,000 sq. km (11,730,000 sq mi) and has a population of 121.61 crores.' },
            { regionName: 'europe', regionImageUrl: 'assets/regions/Europe.png', shortInfo: 'Spanning the eastern and notheren hemispheres, it covers an area of 10,180,000 sq. km (3,930,000 sq mi) and has a population of 74.14 crores.' },
            { regionName: 'oceania', regionImageUrl: 'assets/regions/Oceania.png', shortInfo: 'Spanning the eastern and western hemispheres, it covers an area of 8,525,989 sq. km (3,291,903 sq mi) and has a population of 38.82 million.' }
        ];
    };
    AppService.prototype.getNavbarState = function () {
        return this.navbarOpen;
    };
    AppService.prototype.setNavbarState = function (state) {
        this.navbarOpen = state;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/countries/all-countries/all-countries.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/countries/all-countries/all-countries.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " /* ---------------------------------------------------\r\n      CARDS\r\n  ----------------------------------------------------- */\r\n.container{\r\n    margin-top:5vh;\r\n}\r\n.mat-card-image{\r\n    height: 20vh;\r\n    width: 100%;\r\n}\r\n.mat-card-header{\r\n    display: inline-flex;\r\n    text-align: center;\r\n}\r\n.mat-card-title{\r\n    font-weight: 600;\r\n}\r\n.crop{\r\n    font-weight: 600;\r\n    width: 16vw;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.col-md-4{\r\n    margin-bottom: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/countries/all-countries/all-countries.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/countries/all-countries/all-countries.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" style=\"text-align: center\">\n\n    <div class=\"row\" style=\"text-align: center\">\n        <div *ngIf=\"regionName\" class=\"col-md-12\" style=\"font-size: 24px; color:#00b0ff;font-weight: 800\">All Countries in {{regionName | uppercase}}</div>\n    </div>\n    <br>\n    <div class=\"row\" >\n      <div *ngFor=\"let country of countries\" class=\"col-md-4\" >\n      <mat-card>\n        <mat-card-header >\n          <mat-card-title><div class=\"crop\">{{country.name|uppercase}}</div><br> ({{country.timezones[0]}})</mat-card-title>\n          <mat-card-subtitle>Sub Region: {{country.subregion}}</mat-card-subtitle>\n        </mat-card-header>\n\n        <img mat-card-image src=\"{{country.flag}}\"/>\n        \n        <mat-card-actions layout=\"row\" layout-align=\"end center\">\n          <button mat-button (click)=\"navigateToCountryView(country)\"  class=\"btn-primary\">Get More Details</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n   </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/countries/all-countries/all-countries.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/countries/all-countries/all-countries.component.ts ***!
  \********************************************************************/
/*! exports provided: AllCountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCountriesComponent", function() { return AllCountriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllCountriesComponent = /** @class */ (function () {
    function AllCountriesComponent(router, route, appService, toastr) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.appService = appService;
        this.toastr = toastr;
        this.loadCountriesFromRegion = function () {
            _this.appService.getCountriesFromRegion(_this.regionName).subscribe(function (data) {
                _this.countries = data;
            }, function (error) {
                console.log('error occurred');
            });
        };
        this.loadCountriesFromCurrency = function () {
            _this.appService.getCountriesFromCurrency(_this.currencyCode).subscribe(function (data) {
                _this.countries = data;
                _this.toastr.success("Currency filter applied in all regions.");
            }, function (error) {
                console.log('error occurred');
            });
        };
        this.loadCountriesFromLanguage = function () {
            _this.appService.getCountriesFromLanguage(_this.langCode).subscribe(function (data) {
                _this.countries = data;
                _this.toastr.success("Language filter applied in all regions.");
            }, function (error) {
                console.log('error occurred');
            });
        };
        this.navigateToCountryView = function (data) {
            _this.appService.clearLocalStorage();
            _this.appService.setCountryInLocalStorage(data);
            _this.appService.setNavbarState(false);
            _this.router.navigate(['/country', data.name]);
        };
        route.params.subscribe(function (val) {
            if (_this.regionName = _this.route.snapshot.paramMap.get('regionName')) {
                _this.loadCountriesFromRegion();
            }
            else if (_this.currencyCode = _this.route.snapshot.paramMap.get('currencyCode')) {
                _this.loadCountriesFromCurrency();
            }
            else if (_this.langCode = _this.route.snapshot.paramMap.get('langCode')) {
                _this.loadCountriesFromLanguage();
            }
        });
    }
    AllCountriesComponent.prototype.ngOnInit = function () {
    };
    AllCountriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-countries',
            template: __webpack_require__(/*! ./all-countries.component.html */ "./src/app/countries/all-countries/all-countries.component.html"),
            styles: [__webpack_require__(/*! ./all-countries.component.css */ "./src/app/countries/all-countries/all-countries.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], AllCountriesComponent);
    return AllCountriesComponent;
}());



/***/ }),

/***/ "./src/app/countries/countries.module.ts":
/*!***********************************************!*\
  !*** ./src/app/countries/countries.module.ts ***!
  \***********************************************/
/*! exports provided: CountriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesModule", function() { return CountriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-countries/all-countries.component */ "./src/app/countries/all-countries/all-countries.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _country_country_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./country/country.component */ "./src/app/countries/country/country.component.ts");
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm5/nicky-lenaers-ngx-scroll-to.js");
/* harmony import */ var ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-scrollbar */ "./node_modules/ngx-scrollbar/fesm5/ngx-scrollbar.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CountriesModule = /** @class */ (function () {
    function CountriesModule() {
    }
    CountriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_9__["ScrollToModule"].forRoot(),
                ngx_scrollbar__WEBPACK_IMPORTED_MODULE_10__["ScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'region/:regionName/countries', component: _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_6__["AllCountriesComponent"] },
                    { path: 'allregions/currency/:currencyCode', component: _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_6__["AllCountriesComponent"] },
                    { path: 'allregions/language/:langCode', component: _all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_6__["AllCountriesComponent"] },
                    { path: 'country/:countryName', component: _country_country_component__WEBPACK_IMPORTED_MODULE_8__["CountryComponent"] }
                ])
            ],
            declarations: [_all_countries_all_countries_component__WEBPACK_IMPORTED_MODULE_6__["AllCountriesComponent"], _country_country_component__WEBPACK_IMPORTED_MODULE_8__["CountryComponent"]],
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"]]
        })
    ], CountriesModule);
    return CountriesModule;
}());



/***/ }),

/***/ "./src/app/countries/country/country.component.css":
/*!*********************************************************!*\
  !*** ./src/app/countries/country/country.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\r\n\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background: #fafafa;\r\n}\r\n\r\n\r\np {\r\n    font-family: 'Poppins', sans-serif;\r\n    font-size: 1.1em;\r\n    font-weight: 300;\r\n    line-height: 1.7em;\r\n    color: #999;\r\n}\r\n\r\n\r\na, a:hover, a:focus {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    transition: all 0.3s;\r\n}\r\n\r\n\r\n.line {\r\n    width: 100%;\r\n    height: 1px;\r\n    border-bottom: 1px dashed #ddd;\r\n    margin: 40px 0;\r\n}\r\n\r\n\r\n/* ---------------------------------------------------\r\n    SIDEBAR STYLE\r\n----------------------------------------------------- */\r\n\r\n\r\n#sidebar {\r\n    width: 300px;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    z-index: 999;\r\n    color: rgb(247, 245, 245);\r\n    text-align: center;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.navbar {\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n#sidebar.active {\r\n    margin-left: -300px;\r\n}\r\n\r\n\r\n#sidebar .sidebar-header {\r\n    padding: 15px;\r\n    text-align: center;\r\n    background: #00b0ff;\r\n    width: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n#sidebar .sidebar-header .crop{\r\n    overflow-wrap: normal;\r\n    padding: 15px;\r\n}\r\n\r\n\r\n#sidebar ul.components {\r\n    padding: 10px 0;\r\n}\r\n\r\n\r\n#sidebar ul p {\r\n    color: #fff;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n#sidebar ul li a {\r\n    padding: 10px;\r\n    font-size: 1.1em;\r\n    display: block;\r\n}\r\n\r\n\r\n#sidebar ul li a:hover{\r\n    color: #fff;\r\n    background:#00b0ff;\r\n}\r\n\r\n\r\n/* ---------------------------------------------------\r\n    CONTENT STYLE\r\n----------------------------------------------------- */\r\n\r\n\r\n#content {\r\n    width: calc(100% - 300px);\r\n    margin-top: 5vh;\r\n    padding: 40px;\r\n    min-height: 100vh;\r\n    transition: all 0.3s;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\n\r\n#content.active {\r\n    width: 100%;\r\n}\r\n\r\n\r\n#flag_b img {\r\n    width: 35vw;\r\n    height: 25vh;\r\n}\r\n\r\n\r\n.link{\r\n    cursor: pointer;\r\n    color:#00b0ff;\r\n}\r\n\r\n\r\n/* ---------------------------------------------------\r\n    MEDIAQUERIES\r\n----------------------------------------------------- */\r\n\r\n\r\n@media (max-width: 768px) {\r\n    #sidebar {\r\n        margin-left: -300px;\r\n    }\r\n    #sidebar.active {\r\n        margin-left: 0;\r\n    }\r\n    #content {\r\n        width: 100%;\r\n    }\r\n    #content.active {\r\n        width: calc(100% - 250px);\r\n    }\r\n    #sidebarCollapse span {\r\n        display: none;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/countries/country/country.component.html":
/*!**********************************************************!*\
  !*** ./src/app/countries/country/country.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <!-- Sidebar Holder -->\n \n  <nav id=\"sidebar\"   >\n      <ng-scrollbar>\n    <ul class=\"list-unstyled components navbar navbar-dark bg-dark flex-column\">\n            <div class=\"sidebar-header\">\n              <h3 class=\"crop\" >{{country.name}}</h3>\n              <h5>{{country.capital}}</h5>\n            </div>\n            \n            <li class=\"nav-item\"><a class=\"active\" [ngx-scroll-to]=\"'#region_b'\">Region</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'#subregion_b'\">Sub Region</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'flag_b'\">Flag</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'nativename_b'\">Native Name</a> </li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'population_b'\">Population</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'languages_b'\">Languages</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'#timezones_b'\">Time Zones</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'#lonlat_b'\">Latitude & Longitude</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'currencies_b'\">Currencies</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'area'\">Area</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'numcode_b'\">Numeric Code</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'tld_b'\">Top Level Domains</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'borders_b'\">Borders</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'a2c_b'\">Alpha 2 Code</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'a3c_b'\">Alpha 3 Code</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'regionalblocs_b'\">Regional Blocks</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'callingcodes_b'\">Calling Codes</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'translations_b'\">Translations</a></li>\n            <li class=\"nav-item\"><a [ngx-scroll-to]=\"'cioc_b'\">CIOC</a></li>\n    </ul>\n  </ng-scrollbar>\n  </nav>\n\n  <!-- Page Content Holder -->\n  <div id=\"content\">\n\n    <section id=\"region_b\" class=\"container-fluid\">\n      <h2>Region</h2>\n      <p>This Country falls under {{country.region}} region.</p>\n      <div class=\"line\"></div>\n    </section>\n    \n    <section id=\"subregion_b\">\n        <h2>Sub Region</h2>\n        <p>This Country falls under {{country.subregion}} sub-region.</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"flag_b\">\n        <h2>Flag</h2>\n        <img src=\"{{country.flag}}\" />\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"nativename_b\">\n        <h2>Native Name</h2>\n        <p>This Country is called as {{country.nativeName}} natively.</p>\n        <div class=\"line\"></div>\n    </section>\n \n    <section id=\"population_b\">\n        <h2>Population</h2>\n        <p>The Country has {{country.population}} residents.</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"languages_b\">\n        <h2>Languages</h2>\n        <p>Languages spoken in this country: <br></p>\n          <div *ngFor=\"let language of country.languages\"><p class=\"link\" [routerLink]=\"['/allregions/language',language.iso639_1]\" >\n            Name : {{language.name}} <br>\n            Native Name : {{language.nativeName}}.<br>\n            The ISO639_1 code for this language : \"{{language.iso639_1}}\".<br>\n            The ISO639_2 code for this language : \"{{language.iso639_2}}\".\n          </p></div>\n          <div class=\"line\"></div>\n    </section>\n\n    <section id=\"timezones_b\">\n        <h2>Time Zones</h2>\n        <p>Times zones of this country <br> {{country.timezones }}.</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"lonlat_b\">\n        <h2>Latitude and Longitude</h2>\n        <p>{{country.latlng}}</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"currencies_b\">\n        <h2>Currencies</h2>\n        <p>The currencies used in this country <br></p>\n          <div *ngFor=\"let currency of country.currencies\">\n            <p  class=\"link\" [routerLink]=\"['/allregions/currency',currency.code]\">Name : {{currency.name}}<br>\n            Symbol : {{currency.symbol}}<br>\n            Code : {{currency.code}}<br></p>\n          </div>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"area\">\n        <h2>Area</h2>\n        <p>{{country.area}}.</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"numcode_b\">\n        <h2>Numeric Code</h2>\n        <p>The Numeric code of this country is {{country.numericCode}}.</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"tld_b\">\n        <h2>Top Level Domains</h2>\n        <p>Top Level Domains of this country: \"{{country.topLevelDomain}}\".</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"borders_b\">\n        <h2>Borders</h2>\n        <p *ngIf=\"country.borders.length!=0\">The Borders around this country <br> {{country.borders}}.</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"a2c_b\">\n        <h2>Alpha 2 Code</h2>\n        <p>The aplha 2 code of this country is \"{{country.alpha2Code}}\".</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"a3c_b\">\n        <h2>Alpha 3 Code</h2>\n        <p>The aplha 3 code of this country is \"{{country.alpha3Code}}\".</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"regionalblocs_b\">\n        <h2>Regional Blocks</h2>\n        <p>Regional blocks in this country</p>\n        <div *ngFor =\"let bloc of country.regionalBlocs\"><p>\n          Name : {{bloc.name}}<br>\n          Acronym : {{bloc.acronym}}<br>\n          Other Acronyms : {{bloc.otherAcronyms}}<br>\n          Other Names are {{bloc.otherNames}}<br>\n        </p></div>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"callingcodes_b\">\n        <h2>Calling Codes</h2>\n        <p>{{country.callingCodes}}.</p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"translations_b\">\n        <h2>Translations</h2>\n        <p>It's translation in <br>\n          German : \"{{country.translations.de}}\"<br>\n          Spanish : \"{{country.translations.es}}\"<br>\n          French : \"{{country.translations.fr}}\"<br>\n          Japanese : \"{{country.translations.ja}}\"<br>\n          Italian : \"{{country.translations.it}}\"<br>\n          Breton : \"{{country.translations.br}}\"<br>\n          Portuguese : \"{{country.translations.pt}}\"<br>\n          Dutch : \"{{country.translations.nl}}\"<br>\n          Croatian : \"{{country.translations.hr}}\"<br>\n          Farsi : \"{{country.translations.fa}}\"<br>\n        </p>\n        <div class=\"line\"></div>\n    </section>\n\n    <section id=\"cioc_b\">\n        <h2>CIOC</h2>\n        <p>{{country.cioc}}.</p>\n    </section>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/countries/country/country.component.ts":
/*!********************************************************!*\
  !*** ./src/app/countries/country/country.component.ts ***!
  \********************************************************/
/*! exports provided: CountryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryComponent", function() { return CountryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CountryComponent = /** @class */ (function () {
    function CountryComponent(router, route, appService) {
        this.router = router;
        this.route = route;
        this.appService = appService;
    }
    CountryComponent.prototype.ngOnInit = function () {
        var name = this.route.snapshot.paramMap.get('countryName');
        this.country = this.appService.getCountryFromLocalStroage(name);
    };
    CountryComponent.prototype.ngOnDestroy = function () {
        this.appService.setNavbarState(true);
    };
    CountryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-country',
            template: __webpack_require__(/*! ./country.component.html */ "./src/app/countries/country/country.component.html"),
            styles: [__webpack_require__(/*! ./country.component.css */ "./src/app/countries/country/country.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], CountryComponent);
    return CountryComponent;
}());



/***/ }),

/***/ "./src/app/regions/allregions/allregions.component.css":
/*!*************************************************************!*\
  !*** ./src/app/regions/allregions/allregions.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    margin: auto;\r\n    height: 90vh;\r\n    width: 100vw;\r\n  }\r\n  \r\n  ngb-carousel {\r\n    height:  90vh;\r\n    background-color: white;\r\n  }\r\n  \r\n  .carousel-caption{\r\n    color:black;\r\n  }"

/***/ }),

/***/ "./src/app/regions/allregions/allregions.component.html":
/*!**************************************************************!*\
  !*** ./src/app/regions/allregions/allregions.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ngb-carousel >\n    <ng-container *ngFor=\"let region of regions\">\n    <ng-template ngbSlide >\n      <img src=\"{{region.regionImageUrl}}\" alt=\"Regions\" [routerLink]=\"['/region',region.regionName,'countries']\">\n      <div class=\"carousel-caption\">\n        <h3 [routerLink]=\"['/region',region.regionName,'countries']\">{{region.regionName|uppercase}}</h3>\n        <p>{{region.shortInfo}}</p>\n      </div>\n    </ng-template>\n  </ng-container>\n  </ngb-carousel>\n  "

/***/ }),

/***/ "./src/app/regions/allregions/allregions.component.ts":
/*!************************************************************!*\
  !*** ./src/app/regions/allregions/allregions.component.ts ***!
  \************************************************************/
/*! exports provided: AllRegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllRegionsComponent", function() { return AllRegionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllRegionsComponent = /** @class */ (function () {
    function AllRegionsComponent(config, router, appService) {
        this.router = router;
        this.appService = appService;
        config.interval = 5000;
        config.wrap = true;
        config.keyboard = true;
    }
    AllRegionsComponent.prototype.ngOnInit = function () {
        this.regions = this.appService.getRegions();
    };
    AllRegionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-allregions',
            template: __webpack_require__(/*! ./allregions.component.html */ "./src/app/regions/allregions/allregions.component.html"),
            styles: [__webpack_require__(/*! ./allregions.component.css */ "./src/app/regions/allregions/allregions.component.css")],
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], AllRegionsComponent);
    return AllRegionsComponent;
}());



/***/ }),

/***/ "./src/app/regions/regions.module.ts":
/*!*******************************************!*\
  !*** ./src/app/regions/regions.module.ts ***!
  \*******************************************/
/*! exports provided: RegionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsModule", function() { return RegionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegionsModule = /** @class */ (function () {
    function RegionsModule() {
    }
    RegionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrModule"]
            ],
            declarations: []
        })
    ], RegionsModule);
    return RegionsModule;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\countries-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map