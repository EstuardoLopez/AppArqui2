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
        var Mediciones = { index: index, p1: null, p2: null, temperatura: null };
        for (var i in element) {
          switch (i) {
            case "p1":
              Mediciones.p1 = element[i];
              break;
            case "p2":
              Mediciones.p2 = element[i];
              break;
            case "temperatura":
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
