import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HeaderColor } from '@ionic-native/header-color';
import { MyApp } from './app.component';
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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CarnavalPage,
    CarnavalDetailPage,
    EventosPage,
    EventosDetailPage,
    GastronomiaPage,
    GastronomiaDetailPage,
    HospedagemPage,
    HospedagemDetailPage,
    IgrejasPage,
    IgrejasDetailPage,
    MonumentosPage,
    MonumentosDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CarnavalPage,
    CarnavalDetailPage,
    EventosPage,
    EventosDetailPage,
    GastronomiaPage,
    GastronomiaDetailPage,
    HospedagemPage,
    HospedagemDetailPage,
    IgrejasPage,
    IgrejasDetailPage,
    MonumentosPage,
    MonumentosDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeaderColor
  ]
})
export class AppModule {}
