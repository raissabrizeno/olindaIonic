import { Component } from '@angular/core/';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker} from '@ionic-native/google-maps';
/**
 * Generated class for the GastronomiaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gastronomia-detail',
  templateUrl: 'gastronomia-detail.html',
})
export class GastronomiaDetailPage {
  map = GoogleMap;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googleMaps: GoogleMaps, public platform: Platform) {
  }
}
