import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { CarnavalDetailPage } from '../carnaval-detail/carnaval-detail';
/**
 * Generated class for the CarnavalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-carnaval',
  templateUrl: 'carnaval.html',
})
export class CarnavalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad CarnavalPage');
  // }
  goToCarnavalDetailPage(){
    this.navCtrl.push(CarnavalDetailPage);
  }
}
