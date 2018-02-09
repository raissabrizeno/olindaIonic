import { MonumentosProvider } from './../../providers/monumentos'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MonumentosDetailPage } from '../monumentos-detail/monumentos-detail';
import { Observable } from 'rxjs/Observable';

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

  monumentos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: MonumentosProvider) {
    this.monumentos = this.provider.getAll();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad MonumentosPage');
  // }
goToMonumentosDetailPage(){
  this.navCtrl.push(MonumentosDetailPage);
}
}
