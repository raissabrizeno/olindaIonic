import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CarnavalPage } from '../pages/carnaval/carnaval';
import { EventosPage } from '../pages/eventos/eventos';
import { GastronomiaPage } from '../pages/gastronomia/gastronomia';
import { HospedagemPage } from '../pages/hospedagem/hospedagem';
import { IgrejasPage } from '../pages/igrejas/igrejas';
import { MonumentosPage } from '../pages/monumentos/monumentos';

@Component({
  templateUrl: 'app.html'
  
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'carnaval', component: CarnavalPage},
      { title: 'gastronomia', component: GastronomiaPage},
      { title: 'hospedagem', component: HospedagemPage},
      { title: 'igrejas', component: IgrejasPage},
      { title: 'monumentos', component: MonumentosPage},
      { title: 'eventos', component: EventosPage}
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
