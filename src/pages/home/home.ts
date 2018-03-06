import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotesService } from "../../services/notes.service";
import { DatailPage } from "../datail/datail";
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  notes = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public NotesService:NotesService) {
    /*
    NotesService.getNotes().valueChanges().subscribe(nota => {
      this.notes = nota;
      this.NotesService.hideLoading();
    });
    */
  }

  public goToDetaild(id){
    this.navCtrl.push(DatailPage,{id:id})
  }

  public createNote() {
    this.navCtrl.push(DatailPage, { id: 0 })
  }

  /**
   * viewAbout
   */
  public viewAbout() {
    this.navCtrl.push(AboutPage)
  }

}
