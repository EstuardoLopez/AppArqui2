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

//librerias para firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCa9QGHqMYvUE18JslihpUb8hM1KDggslY",
  authDomain: "fire1-f885b.firebaseapp.com",
  databaseURL: "https://fire1-f885b.firebaseio.com",
  storageBucket: "fire1-f885b.appspot.com",
  messagingSenderId: '830509483188'
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
    HistoryPage
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
    HistoryPage
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
