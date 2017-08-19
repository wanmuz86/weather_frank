import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import { HttpProvider } from '../../providers/http/http'
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	weather:any;

  constructor(public navCtrl: NavController, public http:Http, public httpProvider: HttpProvider, 
    public geolocation: Geolocation ) {

  }

  buttonTapped(){

  	 this.geolocation.getCurrentPosition().then((resp) => {
       this.httpProvider.getCurrentWeather().subscribe(
      data =>  {
        this.weather=data
        console.log(data)
      },
      err => {
        console.log(err)
      },
      ()=>{
        console.log('retrived')
      });
 console.log(resp.coords.latitude)
 console.log(resp.coords.longitude)
}).catch((error) => {
  console.log('Error getting location', error);
});

  	
  }
    
  }


