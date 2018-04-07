import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home'
import { AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
//import {User} from '../../services/user'
import {SingletonService} from '../../services/SingletonService'
//import { Facebook , FacebookLoginResponse } from '@ionic-native/facebook'
import firebase from 'firebase';
/**import { AngularFireAuth } from 'angularfire2/auth';
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private afAuth: AngularFireAuth,
              public alertCtrl: AlertController,
              public singleton:SingletonService//,
              //private facebook: Facebook
            ) {
  }
  userData: any;
  public username = "";
  public password = "";  
  async toAccess(){
    
    if(this.username!="" && this.password!="" ){
      try {
        const result = await this.afAuth.auth.signInWithEmailAndPassword(this.username,this.password);
        console.log(result);
        if (result) {
          this.singleton.loginState = true;
          this.singleton.loginEmail = this.username;
          this.navCtrl.push(HomePage);
        }  
      }
      catch (e) {
        this.showAlertIncorrect();
        console.error(e);
      }
    }else{
      this.showAlert();
    }
    
  // this.navCtrl.push(HomePage);
    }

    async toRegister() {
      try {
        const result = await this.afAuth.auth.createUserWithEmailAndPassword(
          this.username,
          this.password
        );
        if (result) {
          this.showMessage();
          this.navCtrl.push(HomePage);
        }
      } catch (e) {
        console.error(e);
        this.showAlertIncorrect2();
      }
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Ingresa tus datos!',
      subTitle: 'Ingresa un correo y una contraseña validos para iniciar sesión',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  showAlertIncorrect() {
    let alert = this.alertCtrl.create({
      title: 'Ups ocurrió un error',
      subTitle: 'Ingresa tu correo y contraseña correctos para iniciar sesión',
      buttons: ['Aceptar']
    });
    alert.present();
  }

  showMessage() {
    let alert = this.alertCtrl.create({
      title: 'Éxito',
      subTitle: 'Usuario agregado con éxito',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  showAlertIncorrect2() {
    let alert = this.alertCtrl.create({
      title: 'Ups ocurrió un error al registrar',
      subTitle: 'Ingresa tu correo valido y contraseña de 6 digitos para registrarte',
      buttons: ['Aceptar']
    });
    alert.present();
  }
   
  }
  

