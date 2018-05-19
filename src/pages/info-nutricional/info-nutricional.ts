import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage } from "../home/home"
import { NotesService } from '../../services/notes.service';
/**
 * Generated class for the InfoNutricionalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info-nutricional',
  templateUrl: 'info-nutricional.html',
})
export class InfoNutricionalPage {
	public energi =0;
  public cal = 0;
  public datos = [];
	public datosT = [];
	public datosAnt = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public NotesService: NotesService) {
    let datos = [];
    let datosAnt = [];

    let contador = 0;
    this.NotesService.getFirstElement().valueChanges().subscribe(medida => {
      console.log(medida);
      if(medida.length == 1){
        datos.push(Number(medida[0]["p1"]));
        datos.push(Number(medida[0]["p2"]));
  
        datosAnt = null;
      }else{
        datos.push(Number(medida[1]["p1"]));
        datos.push(Number(medida[1]["p2"]));
        datosAnt.push(Number(medida[0]["p1"]));
        datosAnt.push(Number(medida[0]["p2"]));
        console.log(datos);
        console.log(datosAnt);
      }
      var tamDatosActual1=  datos.length; 
      var tamDatosActual2=  datosAnt.length; 
      var numberActualproducto1=datos[tamDatosActual1-2];//producto1
      var numberAnteriorProducto1=datosAnt[tamDatosActual2-2];//producto1
      console.log(numberActualproducto1);
      console.log(numberAnteriorProducto1);

      var numberActualproducto2=datos[tamDatosActual1-1];//producto2
      var numberAnteriorProducto2=datosAnt[tamDatosActual2-1];//producto2
      console.log(numberActualproducto2);
      console.log(numberAnteriorProducto2);

      if(numberActualproducto1<numberAnteriorProducto1){
        this.energi = this.energi+190;
        this.cal = this.cal+10;
      }

      if(numberActualproducto2<numberAnteriorProducto2){
        this.energi = this.energi+190;
        this.cal = this.cal+10;
      }


    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoNutricionalPage');
  }

  public goToBack() {
    this.navCtrl.pop();
  }
  
  public reset() {
    this.energi = 0;
    this.cal = 0;
  }


}
