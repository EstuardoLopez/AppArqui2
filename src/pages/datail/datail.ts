import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DatailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datail',
  templateUrl: 'datail.html',
})
export class DatailPage {

  registro = {};
  constructor(public navCtrl: NavController, public navParams: NavParams){
    this.registro = navParams.get('registro');
    console.log(this.registro);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatailPage');
  }

  public goToBack() {
    this.navCtrl.pop();
  }


}
