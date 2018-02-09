import { EventosProvider } from './../../providers/eventos'
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventosDetailPage } from '../eventos-detail/eventos-detail';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  eventos: Observable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private provider: EventosProvider) {
    this.eventos = this.provider.getAll();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad EventosPage');
  // }
  goToEventosDetailPage(){
    this.navCtrl.push(EventosDetailPage);
  }
}
