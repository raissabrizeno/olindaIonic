import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GastronomiaDetailPage } from './gastronomia-detail';

@NgModule({
  declarations: [
    GastronomiaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GastronomiaDetailPage),
  ],
})
export class GastronomiaDetailPageModule {}
