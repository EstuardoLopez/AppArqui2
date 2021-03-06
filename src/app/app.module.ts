import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {SingletonService} from '../services/SingletonService'
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotesService } from "../services/notes.service";
import { DatailPage } from "../pages/datail/datail";
import { AboutPage } from "../pages/about/about";
import { NotificationsPage } from "../pages/notifications/notifications"
import { ReportesPage } from "../pages/reportes/reportes";
import { CurrentClimatePage } from "../pages/current-climate/current-climate";
import {LoginPage} from '../pages/login/login'
import {MomentDayPage} from '../pages/moment-day/moment-day'
import { HistoryPage } from "../pages/history/history";

import { InfoNutricionalPage } from "../pages/info-nutricional/info-nutricional";

//librerias para firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAkDtYfC8TDTY4io3ov0CYx6tA-aNnPKMU",
  authDomain: "finala2-29fbd.firebaseapp.com",
  databaseURL: "https://finala2-29fbd.firebaseio.com",
  storageBucket: "finala2-29fbd.appspot.com",
  messagingSenderId: '389972865058'
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatailPage,
    LoginPage,
    MomentDayPage,
    AboutPage,
    NotificationsPage,
    ReportesPage,
    CurrentClimatePage,
    HistoryPage,
    InfoNutricionalPage
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatailPage,
    LoginPage,
    MomentDayPage,
    AboutPage,
    NotificationsPage,
    ReportesPage,
    CurrentClimatePage,
    HistoryPage,
    InfoNutricionalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotesService,
    SingletonService
  ]
})
export class AppModule {}
