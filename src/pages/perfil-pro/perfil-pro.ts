import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarServicoPage } from '../cadastrar-servico/cadastrar-servico';
import { ConversaPage } from '../conversa/conversa';

/**
 * Generated class for the PerfilProPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-pro',
  templateUrl: 'perfil-pro.html',
})
export class PerfilProPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilProPage');
  }

  goToCadastrarServico(){
    this.navCtrl.push(CadastrarServicoPage);
  }

  conversa(){
    this.navCtrl.push(ConversaPage);
  }
}
