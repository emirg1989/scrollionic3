import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista = [];
  posicion = 0;

  constructor(public navCtrl: NavController) {
    this.iniciarLista();
  }

  iniciarLista(){
    for(let i = 0;i<15; i++){
      console.log(this.posicion);
      this.lista.push(this.posicion);
      this.posicion +=1;
    }
  }
  nextLoad(){
    for(let i=this.posicion;i< this.posicion+10;i++){
      this.lista.push(i)
    }
    this.posicion+=10;
  }
}
