var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.getCurrentWeather = function () {
        return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=3.1071334999999998&lon=101.6398306&appid=8131be7e3e6b2014b3af931e011bd730')
            .map(function (res) { return res.json(); });
    };
    return HttpProvider;
}());
HttpProvider = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], HttpProvider);
export { HttpProvider };
//# sourceMappingURL=http.js.map