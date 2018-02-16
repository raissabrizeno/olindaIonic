import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HospedagemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hospedagem-detail',
  templateUrl: 'hospedagem-detail.html',
})
export class HospedagemDetailPage {
  hospedagem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.hospedagem = this.navParams.data.hospedagem || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HospedagemDetailPage');
  }

}
