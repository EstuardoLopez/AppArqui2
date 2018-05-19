import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { Chart } from "chart.js";

/**
 * Generated class for the MomentDayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moment-day',
  templateUrl: 'moment-day.html',
})

export class MomentDayPage {
	
	public datos = [];
	public datosT = [];

	@ViewChild('stockProductos') stockProductos;
	@ViewChild('divTemperatura') divTemperatura;
	lineChar: any;
  
  constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public NotesService: NotesService) {
		
		this.datos = navParams.get('datos');
		this.datosT = navParams.get('datosT');
		console.log('Del otro lado ',this.datos);
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
					labels: ["Producto #1", "Producto #2"],
					datasets: [{
						label: 'Stock de productos Actuales',
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

		this.lineChar = new Chart(
			this.divTemperatura.nativeElement,
			{
				type: 'bar',
				data: {
					labels: ["Temperatura"],
					datasets: [{
						label: 'Grados Celsius',
						data: this.datosT,
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
