import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventosDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos-detail',
  templateUrl: 'eventos-detail.html',
})
export class EventosDetailPage {
  eventos: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventos = this.navParams.data.eventos || {};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosDetailPage');
  }

}
