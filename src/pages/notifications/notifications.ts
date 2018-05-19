import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home'
import { NotesService } from '../../services/notes.service';
import { Chart } from "chart.js";
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
  public datos = [];

  @ViewChild('stockProductos') stockProductos;
  lineChar: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public NotesService: NotesService) {

    this.datos = navParams.get('datos');
    console.log('Del otro lado ', this.datos);
  }

  public doRefresh(refresher) {
    refresher.complete();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');

    this.lineChar = new Chart(
      this.stockProductos.nativeElement,
      {
        type: 'bar',
        data: {
          labels: ["Temperatura"],
          datasets: [{
            label: 'Grados Celsius',
            data: this.datos,
            backgroundColor: [
              'rgba(99, 132, 255, 0.7)',
              'rgba(54, 162, 235, 0.7)'
            ],
            borderColor: [
              'rgba(99,132,255,1)',
              'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      }
    );
  }


  public goToBack() {
    this.navCtrl.pop();
  }
}
