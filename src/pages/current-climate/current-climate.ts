import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the CurrentClimatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-current-climate',
  templateUrl: 'current-climate.html',
})
export class CurrentClimatePage {
  public pathImage = "";
  public Mediciones = {temperatura:null, humedad:null, luminosidad:null, presion:null};
  public myDate = "18/03/2018";

  constructor(public navCtrl: NavController, public navParams: NavParams, public NotesService: NotesService) {
    //console.log(this.myDate);
    this.getDate();
    this.pathImage = "img/Soleado.png";
    
    NotesService.getFirstElement().valueChanges().subscribe(medida => {
      this.NotesService.hideLoading();
      for(var i in medida[0]){
        switch (i) {
          case "humidity":
            this.Mediciones.humedad = medida[0][i];
            break;
          case "iluminacion":
            this.Mediciones.luminosidad = medida[0][i];
            break;
          case "pressure":
            this.Mediciones.presion = medida[0][i];
            break;
          case "temperature1":
            this.Mediciones.temperatura = medida[0][i];
            break;        
          default:
            break;
        }
      }

      console.log("medidas: ", this.Mediciones);
      
      if (this.Mediciones.temperatura >= 0 && this.Mediciones.temperatura < 10) {
        this.pathImage = "img/Lluvioso.jpg";
      } else if (this.Mediciones.temperatura >= 10 && this.Mediciones.temperatura < 20) {
        this.pathImage = "img/Nublado.gif";
      } else if (this.Mediciones.temperatura >= 20) {
        this.pathImage = "img/Soleado.jpg";
      }
    });

    /*
      this.Mediciones = NotesService.getFirstElement();
      console.log('del lado del cliente:',this.Mediciones);
      console.log('temperatura:',this.Mediciones.tem)
      if (this.Mediciones.temperatura >= 0 && this.Mediciones.temperatura < 10) {
        this.pathImage = "img/Lluvioso.jpg";
      } else if (this.Mediciones.temperatura >= 10 && this.Mediciones.temperatura < 20) {
        this.pathImage = "img/Nublado.gif";
      } else if (this.Mediciones.temperatura >= 20) {
        this.pathImage = "img/Soleado.jpg";
      }
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrentClimatePage');
  }

  private getDate(){
    var dt = new Date();
    var day = dt.getDate() < 10 ? '0'+dt.getDate() : dt.getDate() ;
    var mes = (dt.getMonth() + 1) < 10 ? '0' + (dt.getMonth()+1)  : (dt.getMonth() + 1)
    this.myDate = day + '/' + mes + '/' + dt.getFullYear();
    console.log(this.myDate);
  }

  public goToBack() {
    this.navCtrl.pop();
  }

}
