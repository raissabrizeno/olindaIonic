import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {gastronomia} from '../gastronomia/gastronomia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  intent(){
    this.navCtrl.push(gastronomia);
  }

}
