import { HospedagemProvider } from './../../providers/hospedagem'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HospedagemDetailPage } from '../hospedagem-detail/hospedagem-detail';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the HospedagemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-hospedagem',
  templateUrl: 'hospedagem.html',
})
export class HospedagemPage {
  hospedagem: Observable<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: HospedagemProvider) {
    this.hospedagem = this.provider.getAll();
  }
  //
  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad HospedagemPage');
  // }
  goToHospedagemDetailPage(){
    this.navCtrl.push(HospedagemDetailPage);
  }
}
