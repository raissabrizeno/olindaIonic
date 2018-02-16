import {GastronomiaProvider } from './../../providers/gastronomia'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GastronomiaDetailPage } from '../gastronomia-detail/gastronomia-detail';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the GastronomiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-gastronomia',
  templateUrl: 'gastronomia.html',
})
export class GastronomiaPage {

  gastronomia: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: GastronomiaProvider) {
    this.gastronomia = this.provider.getAll();
  }
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GastronomiaPage');
  // }
  goToGastronomiaDetailPage(gastronomia: any){
    this.navCtrl.push(GastronomiaDetailPage, {gastronomia: gastronomia});
  }
}
