import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

    lista2 = [];
    posicion2 = 0;

  constructor(public navCtrl: NavController) {
    this.iniciarLista();
  }

  iniciarLista(){
    for(let i = 0;i<15; i++){
      console.log(this.posicion2);
      this.lista2.push(this.posicion2);
      this.posicion2 +=1;
    }
  }
  nextLoad(){
    return new Promise(resolve =>{
        for(let i=this.posicion2;i< this.posicion2+10;i++){
            this.lista2.push(i)
        }
        this.posicion2+=10;
        resolve();
      });
  }
  doInfinite(infiniteScroll:any) {
    console.log("aca entro");
      this.nextLoad().then(() =>{
            console.log("aca tambien entro");
          infiniteScroll.complete();
      });
  }
}
