import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportesPage } from './reportes';
//import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    ReportesPage,
  ],
  imports: [
   /// NgxChartsModule,
    IonicPageModule.forChild(ReportesPage),
  ],
})
export class ReportesPageModule {}
