import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IgrejasDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-igrejas-detail',
  templateUrl: 'igrejas-detail.html',
})
export class IgrejasDetailPage {
  igrejas: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.igrejas = this.navParams.data.igrejas || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IgrejasDetailPage');
  }



}
