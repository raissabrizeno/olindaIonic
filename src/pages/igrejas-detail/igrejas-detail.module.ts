import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IgrejasDetailPage } from './igrejas-detail';

@NgModule({
  declarations: [
    IgrejasDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(IgrejasDetailPage),
  ],
})
export class IgrejasDetailPageModule {}
