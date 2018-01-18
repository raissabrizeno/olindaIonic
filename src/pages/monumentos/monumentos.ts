import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MonumentosDetailPage } from '../monumentos-detail/monumentos-detail';

/**
 * Generated class for the MonumentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-monumentos',
  templateUrl: 'monumentos.html',
})
export class MonumentosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MonumentosPage');
  // }
goToMonumentosDetailPage(){
  this.navCtrl.push(MonumentosDetailPage);
}
}
