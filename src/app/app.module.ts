import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HeaderColor } from '@ionic-native/header-color';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CarnavalPage } from '../pages/carnaval/carnaval';
import { EventosPage } from '../pages/eventos/eventos';
import { GastronomiaPage } from '../pages/gastronomia/gastronomia';
import { HospedagemPage } from '../pages/hospedagem/hospedagem';
import { IgrejasPage } from '../pages/igrejas/igrejas';
import { MonumentosPage } from '../pages/monumentos/monumentos';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CarnavalPage,
    EventosPage,
    GastronomiaPage,
    HospedagemPage,
    IgrejasPage,
    MonumentosPage,
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
    EventosPage,
    GastronomiaPage,
    HospedagemPage,
    IgrejasPage,
    MonumentosPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeaderColor
  ]
})
export class AppModule {}
