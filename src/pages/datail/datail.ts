import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotesService } from '../../services/notes.service';


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

  note = {id:null, title:null, description:null}
  id = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public NotesService:NotesService){
    this.id = navParams.get('id');
    if(this.id != 0){
        this.NotesService.getNote(this.id).valueChanges().subscribe(nota => {
          this.note.id = nota[1];
          this.note.title = nota[2];
          this.note.description = nota[0];
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatailPage');
  }

  addNote() {
    this.NotesService.showLoading();
    if(this.id != 0 ){ //Editando una nota
      this.NotesService.editNote(this.note);
    }else {//creando una nueva nota
      this.note.id = Date.now();
      this.NotesService.createNote(this.note);
    }
    
    this.NotesService.showMessage('Nota guardada con exito');
    this.navCtrl.pop();
  }

  deleteNote(){
    this.NotesService.showLoading();
    this.NotesService.deleteNote(this.note);
    this.NotesService.showMessage('Nota borrada con exito');
    this.navCtrl.pop();
  }

}
