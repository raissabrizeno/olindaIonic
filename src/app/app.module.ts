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
  import { CarnavalProvider } from './../providers/carnaval'

  import { StatusBar } from '@ionic-native/status-bar';
  import { SplashScreen } from '@ionic-native/splash-screen';
  import { GoogleMaps} from '@ionic-native/google-maps';

  import { AngularFireModule } from 'angularfire2';
  import { AngularFireDatabaseModule } from 'angularfire2/database';
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
      AngularFireModule.initializeApp({
        // apiKey: "AIzaSyCKSwciRo4NkHJtHiKWzsyluYxwp_9q1CA",
        // authDomain: "ionic-example-96de5.firebaseapp.com",
        // databaseURL: "https://ionic-example-96de5.firebaseio.com",
        // projectId: "ionic-example-96de5",
        // storageBucket: "ionic-example-96de5.appspot.com",
        // messagingSenderId: "638933829742"
        apiKey: "AIzaSyA4v-fVfGCdTU8Y_PteoVFZfwshhp97kq4",
        authDomain: "ufrpe-20171.firebaseapp.com",
        databaseURL: "https://ufrpe-20171.firebaseio.com",
        projectId: "ufrpe-20171",
        storageBucket: "ufrpe-20171.appspot.com",
        messagingSenderId: "902891095472"
      }),
      AngularFireDatabaseModule
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
      GoogleMaps,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      HeaderColor,
      CarnavalProvider
    ]
  })
  export class AppModule {}
