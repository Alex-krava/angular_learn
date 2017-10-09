webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--header start here--*/\nh1 {\n  text-align: center;\n  font-size: 2em;\n  color: #fff;\n  margin: 3em 0em 2em 0em;\n  font-family: 'Quicksand', sans-serif;\n}\n.element {\n  width: 40%;\n  margin: 0 auto 7em;\n}\n.element-left {\n  float: left;\n  width:50%;\n}\n.element-right {\n  float: right;\n  width: 35%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hot Weather Widget</h1>\n<section class=\"element\">\n  <div class=\"element-left\">\n    <app-hotels [hotels]=\"hotels | hotels:hotelType\"\n                [selectedHotel]=\"hotels | selectedHotel:hotelName:hotelType\"\n                (clickHotel)=\"setSelectedHotel($event)\"\n                (filterHotel)=\"setHotelType($event)\"></app-hotels>\n  </div>\n  <div class=\"element-right\">\n    <app-weather [selectedHotel]=\"hotels | selectedHotel:hotelName:hotelType\"></app-weather>\n    <app-followers [selectedHotel]=\"hotels | selectedHotel:hotelName:hotelType\"></app-followers>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_index__ = __webpack_require__("../../../../../src/app/data/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.hotels = __WEBPACK_IMPORTED_MODULE_1__data_index__["a" /* hotels */];
        this.selectedHotel = __WEBPACK_IMPORTED_MODULE_1__data_index__["a" /* hotels */][0];
        this.hotelType = __WEBPACK_IMPORTED_MODULE_1__data_index__["b" /* typeHotels */][0];
    }
    AppComponent.prototype.setSelectedHotel = function (event) {
        this.selectedHotel = event;
        this.hotelName = event;
    };
    AppComponent.prototype.setHotelType = function (event) {
        this.hotelType = event;
        this.hotelName = '';
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotels_hotels_component__ = __webpack_require__("../../../../../src/app/hotels/hotels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_weather_component__ = __webpack_require__("../../../../../src/app/weather/weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__followers_followers_component__ = __webpack_require__("../../../../../src/app/followers/followers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_hotels_pipe__ = __webpack_require__("../../../../../src/app/pipes/hotels.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_selected_hotel_pipe__ = __webpack_require__("../../../../../src/app/pipes/selected-hotel.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__hotels_hotels_component__["a" /* HotelsComponent */],
                __WEBPACK_IMPORTED_MODULE_4__weather_weather_component__["a" /* WeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_5__followers_followers_component__["a" /* FollowersComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_hotels_pipe__["a" /* HotelsPipe */],
                __WEBPACK_IMPORTED_MODULE_7__pipes_selected_hotel_pipe__["a" /* SelectedHotelPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return typeHotels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hotels; });
var typeHotels = [
    'All Hotels', '5*', '4*', '3*'
];
var hotels = [
    {
        img: './assets/img/hotels/sunrise.jpg',
        address: 'Egypt, Makadi',
        phone: 780000000001,
        weather: {
            title: 'Egypt, Makadi',
            icon: './assets/img/cloudy.png',
            water: 25,
            temperature: 35
        },
        social_info: {
            title: 'SUNRISE Royal Makadi Aqua Resort',
            img: './assets/img/hotels/sunrise-min.jpg',
            followers: 340,
            following: 340
        },
        type: '5*'
    },
    {
        img: './assets/img/hotels/alva-donna.jpg',
        address: 'Turkey, Kemer, Kirish',
        phone: 780000000002,
        weather: {
            title: 'Turkey, Kemer',
            icon: './assets/img/cloudy.png',
            water: 18,
            temperature: 25
        },
        social_info: {
            title: 'Alva Donna World Palace',
            img: './assets/img/hotels/alva-donna-min.jpg',
            followers: 300,
            following: 300
        },
        type: '5*'
    },
    {
        img: './assets/img/1.jpg',
        address: 'Egypt, Hurghada',
        phone: 780000000003,
        weather: {
            title: 'Egypt, Hurghada',
            icon: './assets/img/cloudy.png',
            water: 20,
            temperature: 33
        },
        social_info: {
            title: 'Hawaii Riviera Aqua Park Resort',
            img: './assets/img/r1.jpg',
            followers: 200,
            following: 200
        },
        type: '4*'
    },
    {
        img: './assets/img/1.jpg',
        address: 'Egypt, Hurghada',
        phone: 780000000004,
        weather: {
            title: 'Egypt, Hurghada',
            icon: './assets/img/cloudy.png',
            water: 22,
            temperature: 31
        },
        social_info: {
            title: 'Marlin Inn Resort',
            img: './assets/img/r1.jpg',
            followers: 150,
            following: 150
        },
        type: '4*'
    },
    {
        img: './assets/img/1.jpg',
        address: 'United Arab Emirates, Dubai, Bur Dubai',
        phone: 780000000005,
        weather: {
            title: 'United Arab Emirates, Dubai',
            icon: './assets/img/cloudy.png',
            water: 25,
            temperature: 37
        },
        social_info: {
            title: 'Citymax Bur Dubai',
            img: './assets/img/r1.jpg',
            followers: 100,
            following: 100
        },
        type: '3*'
    },
    {
        img: './assets/img/1.jpg',
        address: 'Thailand, Pattaya, Jomtien',
        phone: 780000000006,
        weather: {
            title: 'Thailand, Pattaya',
            icon: './assets/img/cloudy.png',
            water: 24,
            temperature: 36
        },
        social_info: {
            title: 'Botany Beach Resort',
            img: './assets/img/r1.jpg',
            followers: 90,
            following: 90
        },
        type: '3*'
    }
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/followers/followers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*--teddy-bear--*/\n.teddy-bear {\n  text-align: center;\n}\n.teddy-text {\n  background: #fd7b87;\n  padding: 1.2em 1em;\n  border-radius: 5px 5px 0px 0px;\n}\n.teddy-text h4 {\n  color: #fff;\n}\n.teddy-text img {\n  border-radius: 70px;\n  border: 3px solid #fff;\n}\n.teddy-follow {\n  background: #f2f1ef;\n  padding: 0.7em 0em 0.7em 0em;\n  border-radius: 0px 0px 4px 4px;\n}\n.teddy-follow li {\n  display: inline-block;\n  padding:0em 0.9em;\n}\n.teddy-follow li h3 {\n  font-size: 0.95em;\n  color: #000;\n  font-weight: bold;\n}\n.teddy-follow li p {\n  font-size: 0.8em;\n  color: #8A8A8A;\n}\n.teddy-follow li.folw-h {\n  border-right: 1px solid #000;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/followers/followers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"teddy-bear\">\n  <div class=\"teddy-text\">\n    <h4>{{selectedHotel?.social_info?.title}}</h4>\n    <span class=\"w-line\"> </span>\n    <img [src]=\"selectedHotel?.social_info?.img\" alt=\"\"  class=\"img-responsive\">\n  </div>\n  <div class=\"teddy-follow\">\n    <ul>\n      <li class=\"folw-h\"><h3>{{selectedHotel?.social_info?.followers}}</h3>\n        <p>Followers</p>\n      </li>\n      <li><h3>{{selectedHotel?.social_info?.following}}</h3>\n        <p>Following</p>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/followers/followers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FollowersComponent = /** @class */ (function () {
    function FollowersComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], FollowersComponent.prototype, "selectedHotel", void 0);
    FollowersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-followers',
            template: __webpack_require__("../../../../../src/app/followers/followers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/followers/followers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FollowersComponent);
    return FollowersComponent;
}());

//# sourceMappingURL=followers.component.js.map

/***/ }),

/***/ "../../../../../src/app/hotels/hotels.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ele-strip {\n  background: #fda660;\n  padding: 1em 1em;\n  margin: -3px 0px 0px 0px;\n}\n.ele-strip ul{\n  text-align: center;\n}\n.ele-strip ul li {\n  display: inline-block;\n  padding: 0em 0.5em;\n  border-right: 1px solid #fff;\n}\n.ele-strip ul li a{\n  font-size:1em;\n  color: #fff;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hotels/hotels.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"element-bg-img\"><img [src]=\"selectedHotel?.img\" alt=\"\" class=\"img-responsive\"> </div>\n<div class=\"element-left-bottom\">\n  <div class=\"ele-strip\">\n    <ul>\n      <li *ngFor=\"let filterItem of filterMenuItems\">\n        <a href=\"#\" (click)=\"filterClick(filterItem); false\">{{filterItem}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"village\">\n    <h3>Hotels</h3>\n    <span class=\"line\"> </span>\n    <div class=\"activity_box\">\n      <div class=\"scrollbar\" id=\"style-2\">\n        <div class=\"activity-row\" *ngFor=\"let hotel of hotels\">\n          <div class=\"activity-desc\">\n            <a href=\"#\" (click)=\"enterHotel(hotel); false\">{{ hotel?.social_info?.title }}</a>\n            <p>{{ hotel?.address }}</p>\n            <h6>Tel:+{{ hotel?.phone }}</h6>\n          </div>\n          <div class=\"activity-img\">\n            <ul>\n              <li><img [src]='hotel?.social_info?.img' alt=\"\"/></li>\n            </ul>\n          </div>\n          <div class=\"clear\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/hotels/hotels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_index__ = __webpack_require__("../../../../../src/app/data/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HotelsComponent = /** @class */ (function () {
    function HotelsComponent() {
        this.filterMenuItems = __WEBPACK_IMPORTED_MODULE_1__data_index__["b" /* typeHotels */];
        this.clickHotel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.filterHotel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    HotelsComponent.prototype.filterClick = function (type) {
        this.filterHotel.emit(type);
    };
    HotelsComponent.prototype.enterHotel = function (hotel) {
        this.clickHotel.emit(hotel.social_info.title);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], HotelsComponent.prototype, "hotels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], HotelsComponent.prototype, "selectedHotel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _a || Object)
    ], HotelsComponent.prototype, "clickHotel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]) === "function" && _b || Object)
    ], HotelsComponent.prototype, "filterHotel", void 0);
    HotelsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hotels',
            template: __webpack_require__("../../../../../src/app/hotels/hotels.component.html"),
            styles: [__webpack_require__("../../../../../src/app/hotels/hotels.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HotelsComponent);
    return HotelsComponent;
    var _a, _b;
}());

//# sourceMappingURL=hotels.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/hotels.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotelsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HotelsPipe = /** @class */ (function () {
    function HotelsPipe() {
    }
    HotelsPipe.prototype.transform = function (value, args) {
        var _this = this;
        if (args === void 0) { args = ''; }
        if (args === 'All Hotels') {
            return value;
        }
        else {
            var filtered = value.filter(function (val) { return _this.filterFunction(val, args); });
            return filtered;
        }
    };
    HotelsPipe.prototype.filterFunction = function (hotels, type) {
        if (hotels.type === type) {
            return true;
        }
        else {
            return false;
        }
    };
    HotelsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'hotels'
        })
    ], HotelsPipe);
    return HotelsPipe;
}());

//# sourceMappingURL=hotels.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/selected-hotel.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectedHotelPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SelectedHotelPipe = /** @class */ (function () {
    function SelectedHotelPipe() {
    }
    SelectedHotelPipe.prototype.transform = function (value, args, type) {
        var _this = this;
        var hotels = value;
        if (type !== 'All Hotels') {
            hotels = value.filter(function (val) { return _this.filterHotelsFunction(val, type); });
        }
        if (!args) {
            return hotels[0];
        }
        else {
            var filtered = hotels.filter(function (val) { return _this.filterFunction(val, args); })[0];
            return filtered;
        }
    };
    SelectedHotelPipe.prototype.filterFunction = function (hotels, name) {
        if (hotels.social_info.title === name) {
            return true;
        }
        else {
            return false;
        }
    };
    SelectedHotelPipe.prototype.filterHotelsFunction = function (hotels, type) {
        if (hotels.type === type) {
            return true;
        }
        else {
            return false;
        }
    };
    SelectedHotelPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'selectedHotel'
        })
    ], SelectedHotelPipe);
    return SelectedHotelPipe;
}());

//# sourceMappingURL=selected-hotel.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".temperatur {\n  background: #5fb3f9;\n  text-align: center;\n  padding: 1em 1em;\n  border-radius: 5px;\n  margin-bottom: 2.5em;\n}\n.temperatur h5 {\n  color: #fff;\n  font-size: 1em;\n}\n.temperatur h2 {\n  color: #fff;\n  font-size: 3.2em;\n  display: inline-block;\n  vertical-align: top;\n  font-family: 'Roboto', sans-serif;\n}\n.temperatur h6 {\n  font-size: 1em;\n  color: #fff;\n  margin:1em 0em 0em 0em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"temperatur\">\n  <h5>{{selectedHotel?.weather?.title}}</h5>\n  <span class=\"w-line\"> </span>\n  <span class=\"cloud\"> </span>\n  <h2>{{selectedHotel?.weather?.temperature}}<sup class=\"degree\">°</sup></h2>\n  <h6>Water {{selectedHotel?.weather?.water}}<sup class=\"degree\">°</sup></h6>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/weather/weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], WeatherComponent.prototype, "selectedHotel", void 0);
    WeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-weather',
            template: __webpack_require__("../../../../../src/app/weather/weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeatherComponent);
    return WeatherComponent;
}());

//# sourceMappingURL=weather.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map