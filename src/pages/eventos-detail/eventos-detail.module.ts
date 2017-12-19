import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosDetailPage } from './eventos-detail';

@NgModule({
  declarations: [
    EventosDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(EventosDetailPage),
  ],
})
export class EventosDetailPageModule {}
