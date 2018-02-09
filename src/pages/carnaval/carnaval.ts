import { CarnavalProvider } from './../../providers/carnaval'
import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { CarnavalDetailPage } from '../carnaval-detail/carnaval-detail';
import { Observable } from 'rxjs/Observable';
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

  carnaval: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: CarnavalProvider) {
    this.carnaval = this.provider.getAll();
  }

  goToCarnavalDetailPage(){
    this.navCtrl.push(CarnavalDetailPage);
  }
}
