import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentDayPage } from './moment-day';

@NgModule({
  declarations: [
    MomentDayPage,
  ],
  imports: [
    IonicPageModule.forChild(MomentDayPage),
  ],
})
export class MomentDayPageModule {}
