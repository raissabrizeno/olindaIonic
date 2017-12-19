import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonumentosDetailPage } from './monumentos-detail';

@NgModule({
  declarations: [
    MonumentosDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MonumentosDetailPage),
  ],
})
export class MonumentosDetailPageModule {}
