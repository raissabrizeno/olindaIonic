import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MonumentosDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monumentos-detail',
  templateUrl: 'monumentos-detail.html',
})
export class MonumentosDetailPage {
  monumentos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.monumentos = this.navParams.data.monumentos || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MonumentosDetailPage');
  }

}
