import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HeaderColor } from '@ionic-native/header-color'

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CarnavalPage } from '../pages/carnaval/carnaval';
import { CarnavalDetailPage } from '../pages/carnaval-detail/carnaval-detail';
import { EventosPage } from '../pages/eventos/eventos';
import { EventosDetailPage } from '../pages/eventos-detail/eventos-detail';
import { GastronomiaPage } from '../pages/gastronomia/gastronomia';
import { GastronomiaDetailPage } from '../pages/gastronomia-detail/gastronomia-detail';
import { HospedagemPage } from '../pages/hospedagem/hospedagem';
import { HospedagemDetailPage } from '../pages/hospedagem-detail/hospedagem-detail';
import { IgrejasPage } from '../pages/igrejas/igrejas';
import { IgrejasDetailPage } from '../pages/igrejas-detail/igrejas-detail';
import { MonumentosPage } from '../pages/monumentos/monumentos';
import { MonumentosDetailPage } from '../pages/monumentos-detail/monumentos-detail';

@Component({
  templateUrl: 'app.html'

})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(private headerColor: HeaderColor, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.headerColor.tint('#fd6003');

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'carnaval', component: CarnavalPage},
      { title: 'CarnavalDetail', component: CarnavalDetailPage},
      { title: 'gastronomia', component: GastronomiaPage},
      { title: 'GastronomiaDetail', component: GastronomiaDetailPage},
      { title: 'hospedagem', component: HospedagemPage},
      { title: 'HospedagemDetail', component: HospedagemDetailPage},
      { title: 'igrejas', component: IgrejasPage},
      { title: 'IgrejasDetail', component: IgrejasDetailPage},
      { title: 'monumentos', component: MonumentosPage},
      { title: 'MonumentosDetail', component: MonumentosDetailPage},
      { title: 'eventos', component: EventosPage},
      { title: 'EventosDetail', component: EventosDetailPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
