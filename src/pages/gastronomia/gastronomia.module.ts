import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GastronomiaPage } from './gastronomia';

@NgModule({
  declarations: [
    GastronomiaPage,
  ],
  imports: [
    IonicPageModule.forChild(GastronomiaPage),
  ],
})
export class GastronomiaPageModule {}
