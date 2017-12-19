import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage} from '../list/list';
import { HeaderColor } from '@ionic-native/header-color';
import { CarnavalPage } from '../carnaval/carnaval';
import { EventosPage } from '../eventos/eventos';
import { GastronomiaPage } from '../gastronomia/gastronomia';
import { HospedagemPage } from '../hospedagem/hospedagem';
import { IgrejasPage } from '../igrejas/igrejas';
import { MonumentosPage } from '../monumentos/monumentos';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private headerColor: HeaderColor) {

  }

  setColorOne(){
    this.headerColor.tint('#fd6003');
  }

  goToCarnavalPage(){
    this.navCtrl.push(CarnavalPage);
  }

  goToGastronomiaPage(){
    this.navCtrl.push(GastronomiaPage);
  }

  goToHospedagemPage(){
    this.navCtrl.push(HospedagemPage);
  }
  goToIgrejasPage(){
    this.navCtrl.push(IgrejasPage);
  }

  goToMonumentosPage(){
    this.navCtrl.push(MonumentosPage);
  }

  goToEventosPage(){
    this.navCtrl.push(EventosPage);
  }

}
