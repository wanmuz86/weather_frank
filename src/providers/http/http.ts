import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpProvider Provider');
  }

  getCurrentWeather(){
  	return this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=3.1071334999999998&lon=101.6398306&appid=8131be7e3e6b2014b3af931e011bd730')
  	.map(res => res.json())
  }

}
