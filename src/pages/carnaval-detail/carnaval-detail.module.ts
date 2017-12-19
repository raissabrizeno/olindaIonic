import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarnavalDetailPage } from './carnaval-detail';

@NgModule({
  declarations: [
    CarnavalDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CarnavalDetailPage),
  ],
})
export class CarnavalDetailPageModule {}
