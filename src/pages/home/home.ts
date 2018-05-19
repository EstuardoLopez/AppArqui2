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
import { MomentDayPage } from '../moment-day/moment-day';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
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
    let datos = [];
    let datosAnt = [];
    let datosT =[];
    let contador = 0;
    this.NotesService.getFirstElement().valueChanges().subscribe(medida => {
      console.log(medida);
      if(medida.length == 1){
        datos.push(Number(medida[0]["p1"]));
        datos.push(Number(medida[0]["p2"]));
        datosT.push(Number(medida[0]["temperatura"]));
        datosAnt = null;
      }else{
        datos.push(Number(medida[1]["p1"]));
        datos.push(Number(medida[1]["p2"]));
        datosT.push(Number(medida[1]["temperatura"]));
        datosAnt.push(Number(medida[0]["p1"]));
        datosAnt.push(Number(medida[0]["p2"]));
        console.log(datos);
        console.log(datosAnt);
      }
      
      this.navCtrl.push(MomentDayPage, { datos: datos, datosT: datosT, datosAnt: datosAnt })
      contador++;
      datos = [];
       datosAnt = [];
       datosT = [];
    });    
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
  
  public goToHistory(){
    this.navCtrl.push(HistoryPage);
  }
}
