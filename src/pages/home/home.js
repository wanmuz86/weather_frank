var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpProvider } from '../../providers/http/http';
import { Geolocation } from '@ionic-native/geolocation';
var HomePage = (function () {
    function HomePage(navCtrl, http, httpProvider, geolocation) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.httpProvider = httpProvider;
        this.geolocation = geolocation;
    }
    HomePage.prototype.buttonTapped = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.httpProvider.getCurrentWeather().subscribe(function (data) {
                _this.weather = data;
                console.log(data);
            }, function (err) {
                console.log(err);
            }, function () {
                console.log('retrived');
            });
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, Http, HttpProvider,
        Geolocation])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map