import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from "../../services/notes.service";
import { DatailPage } from "../datail/datail";
import { AboutPage } from '../about/about';
import { NotificationsPage } from '../notifications/notifications';
import { ReportesPage } from '../reportes/reportes';
import { CurrentClimatePage } from '../current-climate/current-climate';
import {LoginPage} from '../login/login';
import {SingletonService} from '../../services/SingletonService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, 
              public NotesService:NotesService,
              public singleton:SingletonService) {
    /*
    NotesService.getNotes().valueChanges().subscribe(nota => {
      this.notes = nota;
      this.NotesService.hideLoading();
    });
    */
  }

  public goToDetaild(id){
    this.navCtrl.push(DatailPage,{id:id})
  }

  public createNote() {
    this.navCtrl.push(DatailPage, { id: 0 })
  }
  
  public momentDay(){
    this.navCtrl.push(MomentDayPage);
  }


  /**
   * viewAbout
   */
  public goToAbout() {
    this.navCtrl.push(AboutPage);
  }

  public goToNotification(){
    this.navCtrl.push(NotificationsPage);
  }

  public goToReportes(){
    this.navCtrl.push(ReportesPage);
  }

  public goToCurrentClimate() {
    this.navCtrl.push(CurrentClimatePage);
  }
  
  public goToExit() {
    console.log(this.singleton.loginEmail);
    this.singleton.loginState = false;
    this.singleton.loginEmail = '';
    this.navCtrl.push(LoginPage);
  }
  
}
