import { IgrejasProvider } from './../../providers/igrejas'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IgrejasDetailPage } from '../igrejas-detail/igrejas-detail';
import { Observable } from 'rxjs/Observable';

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

  igrejas: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: IgrejasProvider) {
    this.igrejas = this.provider.getAll();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad IgrejasPage');
  // }
  goToIgrejasDetailPage(igrejas: any){
    this.navCtrl.push(IgrejasDetailPage, {igrejas: igrejas});
  }

}
