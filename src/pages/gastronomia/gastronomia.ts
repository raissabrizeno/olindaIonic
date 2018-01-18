import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GastronomiaDetailPage } from '../gastronomia-detail/gastronomia-detail';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad GastronomiaPage');
  // }
  goToGastronomiaDetailPage(){
    this.navCtrl.push(GastronomiaDetailPage);
  }
}
