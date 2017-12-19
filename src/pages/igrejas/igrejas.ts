import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IgrejasDetailPage } from '../igrejas-detail/igrejas-detail';

/**
 * Generated class for the IgrejasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-igrejas',
  templateUrl: 'igrejas.html',
})
export class IgrejasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad IgrejasPage');
  // }
  goToIgrejasDetailPage(){
    this.navCtrl.push(IgrejasDetailPage);
  }

}
