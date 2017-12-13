import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MonumentosPage } from './monumentos';

@NgModule({
  declarations: [
    MonumentosPage,
  ],
  imports: [
    IonicPageModule.forChild(MonumentosPage),
  ],
})
export class MonumentosPageModule {}
