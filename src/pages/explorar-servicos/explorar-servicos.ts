import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilProPage } from '../perfil-pro/perfil-pro';

/**
 * Generated class for the ExplorarServicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explorar-servicos',
  templateUrl: 'explorar-servicos.html',
})
export class ExplorarServicosPage {
descricao:string;
servico:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.descricao = navParams.get('descricao');
    this.servico = navParams.get('servico');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorarServicosPage');
  }

  goToPerfilProPage(){
    this.navCtrl.push(PerfilProPage)
  }
}
