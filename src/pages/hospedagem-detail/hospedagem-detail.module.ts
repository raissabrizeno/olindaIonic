import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HospedagemDetailPage } from './hospedagem-detail';

@NgModule({
  declarations: [
    HospedagemDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(HospedagemDetailPage),
  ],
})
export class HospedagemDetailPageModule {}
