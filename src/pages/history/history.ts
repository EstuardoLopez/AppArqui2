import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from "../../services/notes.service";
import { DatailPage } from "../datail/datail";
/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  registros = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams, public NotesService: NotesService) {
    NotesService.getNotes().valueChanges().subscribe(nota => {
      this.NotesService.hideLoading();
      var index = 0;
      nota.forEach(element => {
        index = index + 1;
        var Mediciones = {index:index, temperatura: null, humedad: null, luminosidad: null, presion: null };
        for (var i in element) {
          switch (i) {
            case "humidity":
              Mediciones.humedad = element[i];
              break;
            case "iluminacion":
              Mediciones.luminosidad = element[i];
              break;
            case "pressure":
              Mediciones.presion = element[i];
              break;
            case "temperature1":
              Mediciones.temperatura = element[i];
              break;
            default:
              break;
          }
        }
        this.registros.push(Mediciones)
      });
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  public goToBack() {
    this.navCtrl.pop();
  }

  public goToDetaild(id){
    console.log(this.registros[id-1]);
    this.navCtrl.push(DatailPage,{registro:this.registros[id-1]});
  }

}
