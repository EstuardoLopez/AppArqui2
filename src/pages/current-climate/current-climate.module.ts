import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrentClimatePage } from './current-climate';

@NgModule({
  declarations: [
    CurrentClimatePage,
  ],
  imports: [
    IonicPageModule.forChild(CurrentClimatePage),
  ],
})
export class CurrentClimatePageModule {}
