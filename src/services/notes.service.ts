import { Injectable } from "@angular/core";
import { ToastController, Item, LoadingController  } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database/database";

@Injectable()
export class NotesService {
    notes = [];
    loader = null;
    Mediciones = { temperatura: null, humedad: null, luminosidad: null, presion: null };
    constructor(public toastCtrl: ToastController, public afDB: AngularFireDatabase, public loadingCtrl: LoadingController) {

    }

    public getNotes() {
        //return this.notes;
        this.showLoading();
        return this.afDB.list<Item>('estacion/', ref => ref.limitToLast(100));
        
    }

    public getFirstElement() {
        this.showLoading();
        return this.afDB.list<Item>('estacion/', ref => ref.limitToLast(1));
    }

    public getNote(id){
       // return this.notes.filter(function(e,i) { return e.id == id;})[0] || {id:null, title:null, description:null};
        return this.afDB.list<Item>('notas/'+id);
    }

    public createNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
        //this.loader.dismiss();
    }

    public editNote(note){
        this.afDB.database.ref('notas/' + note.id).set(note);
        this.loader.dismiss();
    }

    public deleteNote(note){
        this.afDB.database.ref('notas/' + note.id).remove();
        //this.loader.dismiss();
    }

    public showMessage(message){
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }

    public showLoading(){
        this.loader = this.loadingCtrl.create({
            content: "Espere por favor.."
        });
        this.loader.present();
    }

    public hideLoading(){
        this.loader.dismiss();
    }

    public setTimeDelay(val){
        this.afDB.database.ref('timeDelay').set(val);
     }

     public setState(val){
        this.afDB.database.ref('estado').set(val);
     }

}