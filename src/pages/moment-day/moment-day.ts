import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';
import { Chart } from "chart.js";
import {HomePage } from "../home/home"

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
	public datosAnt = [];

	@ViewChild('stockProductos') stockProductos;
	@ViewChild('divTemperatura') divTemperatura;
	lineChar: any;
  
  constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public NotesService: NotesService) {
		
		this.datos = navParams.get('datos');
		this.datosT = navParams.get('datosT');
		this.datosAnt = navParams.get('datosAnt');
		console.log('datos Anterores: ', this.datosAnt);
		console.log('datos Actuales:', this.datos);
		
		if(this.datosAnt != null && this.datos != null){
			if(this.datosAnt[0] !=0 && this.datos[0]==0){
				//escribo nodito #1
				console.log('Escribo nodo1');
				NotesService.createNodo(1);
				//NotesService.deleteNodo(1);
			}

			if (this.datosAnt[1] != 0 && this.datos[1] == 0) {
				//escribo nodito #1
				console.log('Escribo nodo2');
				NotesService.createNodo(2);
				//NotesService.deleteNodo(2);
			}

			if (this.datosAnt[2] < 32 && this.datos[2] >= 32) {
				//escribo nodito #1
				console.log('Escribo nodo3');
				NotesService.createNodo(3);
				//NotesService.deleteNodo(1);
			}

			if (this.datosAnt[1] != 0 && this.datos[1] == 0) {
				//escribo nodito #1
				console.log('Escribo nodo2');
				NotesService.createNodo(2);
				//NotesService.deleteNodo(2);
			}
			
			if (this.datosAnt[0] == 0 && this.datos[0] != 0) {
				//escribo nodito #1
				console.log('Borro nodo1');
				NotesService.deleteNodo(1);
			}

			if (this.datosAnt[1] == 0 && this.datos[1] != 0) {
				//escribo nodito #1
				console.log('Borro nodo2');
				NotesService.deleteNodo(2);
			}	
			
			if (this.datosAnt[2] >= 0 && this.datos[2] < 0) {
				//escribo nodito #1
				console.log('Borro nodo3');
				NotesService.deleteNodo(3);
				//NotesService.deleteNodo(2);
			}
		}
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
						label: 'Stock: ',
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
	  //HomePage
	  this.navCtrl.setRoot(HomePage);
	  this.navCtrl.popToRoot();
  }


}
