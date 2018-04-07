import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../../pages/home/home'
import { NotesService } from '../../services/notes.service';

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
  public Mediciones = {temperatura:null, humedad:null, luminosidad:null, presion:null};
  public image = 'assets/img/day.jpg'; 
  public time = 'día'; 
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public NotesService: NotesService) {

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
                  if (this.Mediciones.luminosidad >= 0 && this.Mediciones.luminosidad < 10) {
                    this.time= 'noche'; 
                    this.image = 'assets/img/nig.jpeg'; 
                  } else if (this.Mediciones.luminosidad >= 10 && this.Mediciones.luminosidad < 50) {
                    this.time= 'amanecer'; 
                    this.image = 'assets/img/man.jpeg'; 
                  } else if (this.Mediciones.luminosidad >= 50) {
                    this.time= 'dia'; 
                    this.image = 'assets/img/day.jpeg'; 
                  }
                  console.log("medidas: ", this.Mediciones);
                 
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MomentDayPage');
  }


  public goToBack() {
      this.navCtrl.push(HomePage);
  }


}
