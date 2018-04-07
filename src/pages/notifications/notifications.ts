import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home'
import { NotesService } from '../../services/notes.service';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  public timeDe = 1; 
  public isToggled: boolean;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public NotesService: NotesService,
              public alertCtrl: AlertController,) {
              this.isToggled = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }
  
  public goToBack() {
    this.navCtrl.push(HomePage);
}

public toChange(){
  if(this.timeDe>0){
    this.timeDe = this.timeDe *1000;
    console.log(this.NotesService.setTimeDelay(this.timeDe));
    this.timeDe = 1;
    this.showAlert('Exito' , 'Cambio realizado');
  }else{
    this.showAlert('Ups ocurrió un error' , 'Ingresa un numero mayor a 0');
  }
}

showAlert(mensaje1, mensaje2) {
  let alert = this.alertCtrl.create({
    title: mensaje1,
    subTitle: mensaje2,
    buttons: ['Aceptar']
  });
  alert.present();
}

public notify() {
  if(this.isToggled){
    console.log(this.isToggled);
    this.NotesService.setState(this.isToggled);
    this.showAlert('Cambio de estado', 'Endendiendo el dispositivo');
  }else{
    console.log(this.isToggled);
    this.NotesService.setState(this.isToggled);
    this.showAlert('Cambio de estado', 'Apagando el dispositivo');
  }

}

}
