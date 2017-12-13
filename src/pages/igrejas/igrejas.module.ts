import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IgrejasPage } from './igrejas';

@NgModule({
  declarations: [
    IgrejasPage,
  ],
  imports: [
    IonicPageModule.forChild(IgrejasPage),
  ],
})
export class IgrejasPageModule {}
