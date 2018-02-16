import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CarnavalDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carnaval-detail',
  templateUrl: 'carnaval-detail.html',
})
export class CarnavalDetailPage {
  carnaval: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carnaval = this.navParams.data.carnaval || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarnavalDetailPage');
  }

}
