import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpcoesInicialPage } from '../opcoes-inicial/opcoes-inicial';
import { EdicaoPerfilPage } from '../edicao-perfil/edicao-perfil';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  sair(){
    this.navCtrl.push(OpcoesInicialPage); 
  }
 
  editar(){
    this.navCtrl.push(EdicaoPerfilPage); 
  }


}
