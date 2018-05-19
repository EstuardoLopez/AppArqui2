import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';

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

	public myDate = "18/03/2018";
	public p1 =0;
	public p2 = 0;
	public temperatura = 0;

	constructor(public navCtrl: NavController, public navParams: NavParams, public NotesService: NotesService) {
		//console.log(this.myDate);
		this.getDate();
		NotesService.getFirstElement().valueChanges().subscribe(datosPachon => {
			console.log(datosPachon);
			this.p1 = datosPachon[0]['p1'];
			this.p2 = datosPachon[0]['p2'];
			this.temperatura = datosPachon[0]['temperatura'];
		}); 
	}	

	ionViewDidLoad() {
		console.log('ionViewDidLoad CurrentClimatePage');
	}

	private getDate(){
		var dt = new Date();
		var day = dt.getDate() < 10 ? '0'+dt.getDate() : dt.getDate() ;
		var mes = (dt.getMonth() + 1) < 10 ? '0' + (dt.getMonth()+1)  : (dt.getMonth() + 1)
		var hora = (dt.getHours()) < 10 ? '0' + (dt.getHours()) : dt.getHours();
		var minutes = (dt.getMinutes()) < 10 ? '0' + (dt.getMinutes()) : dt.getMinutes();
		this.myDate = day + '/' + mes + '/' + dt.getFullYear() + ' ' + hora+':'+minutes;
	}

	public goToBack() {
		this.navCtrl.pop();
	}

}
