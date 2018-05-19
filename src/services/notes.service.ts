import { Injectable } from "@angular/core";
import { ToastController, Item, LoadingController  } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database/database";

@Injectable()
export class NotesService {
    notes = [];
    loader = null;
    myDate = '';
    
    Mediciones = { temperatura: null, humedad: null, luminosidad: null, presion: null };
    constructor(public toastCtrl: ToastController, 
        public afDB: AngularFireDatabase,
        public loadingCtrl: LoadingController) {

    }

    public getNotes() {
        //return this.notes;
        this.showLoading();
        return this.afDB.list<Item>('cantidad/', ref => ref.limitToLast(100));
        
    }

    public getFirstElement() {
       // this.showLoading();
        return this.afDB.list<Item>('cantidad/', ref => ref.limitToLast(2));
    }

    public getNote(id){
       // return this.notes.filter(function(e,i) { return e.id == id;})[0] || {id:null, title:null, description:null};
        return this.afDB.list<Item>('notas/'+id);
    }

    public getTotalBebido(){
        this.showLoading();
        return this.afDB.list<Item>('totalBebido/', ref => ref.limitToFirst(1));
    }

    public aumentarContador(){
        this.afDB.list<Item>('totalBebido/', ref => ref.limitToFirst(1)).valueChanges().subscribe(valor => {
            console.log('vamos a umentar',Number(valor[0]));
           // this.writeTotalBebido(Number(valor[0])+1);
        })
    }

    public createNote(note){
        this.afDB.database.ref('notas/'+note.id).set(note);
        //this.loader.dismiss();
    }

    public writeTotalBebido(total){
        this.afDB.database.ref('totalBebido/valor').set(total);
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
        //this.afDB.database.ref('timeDelay').set(val);
        this.afDB.database.ref('datosPachon/meta').set(val);
     }

     public setState(val){
        this.afDB.database.ref('estado').set(val);
     }

     /*************************** */

    public setContador(){
        this.showLoading();
        this.afDB.database.ref('datosPachon/tomados').set(0);
    }

     public getDatosPachon(){
        return this.afDB.list<Item>('datosPachon/');
     }


    public createNodo(nodo) {
        let rama = 'notifp' + nodo;
        this.getDate();
        this.afDB.database.ref(rama).set({send:true,email:'estuardogat@gmail.com', date:this.myDate});
        //this.loader.dismiss();
    }

    public deleteNodo(nodo) {
        let rama = 'notifp' + nodo;
        this.afDB.database.ref(rama).remove();
        //this.loader.dismiss();
    }

    private getDate() {
        var dt = new Date();
        var day = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
        var mes = (dt.getMonth() + 1) < 10 ? '0' + (dt.getMonth() + 1) : (dt.getMonth() + 1)
        var hora = (dt.getHours()) < 10 ? '0' + (dt.getHours()) : dt.getHours();
        var minutes = (dt.getMinutes()) < 10 ? '0' + (dt.getMinutes()) : dt.getMinutes();
        this.myDate = day + '/' + mes + '/' + dt.getFullYear() + ' ' + hora + ':' + minutes;
    }

    /***************************************************despensa */

    public editEnergy(note){
        this.afDB.database.ref('energia').set(note);
    }

    public getEnergy(){
        return this.afDB.list<Item>('/energia', ref => ref.limitToLast(1));
    }
   
}