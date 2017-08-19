import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	weather:any;

  constructor(public navCtrl: NavController, public http:Http) {

  }

  buttonTapped(){
  	this.http.get('http://api.openweathermap.org/data/2.5/weather?lat=3.1071334999999998&lon=101.6398306&appid=8131be7e3e6b2014b3af931e011bd730')
  	.map(res => res.json())
  	.subscribe(
  		data =>	{
  			this.weather=data
  			console.log(data)
  		},
  		err => {
  			console.log(err)
  		},
  		()=>{
  			console.log('retrived')
  		});
  }

  }


