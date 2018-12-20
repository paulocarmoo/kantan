import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TodosFavPage } from '../todos-fav/todos-fav';
import { PerfilProPage } from '../perfil-pro/perfil-pro';
import { ExplorarServicosPage } from '../explorar-servicos/explorar-servicos';
import { CadastrarServicoPage } from '../cadastrar-servico/cadastrar-servico';

/**
 * Generated class for the ExplorarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explorar',
  templateUrl: 'explorar.html',
})
export class ExplorarPage {
  descricao: string;
  servico: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExplorarPage');
  }
  goToTodosFavPage(){
    this.navCtrl.push(TodosFavPage); 
  }

  goToPerfilProPage(){
    this.navCtrl.push(PerfilProPage); 
  }

  explorarservico(servico: string, descricao:string){
    this.navCtrl.push(ExplorarServicosPage, {servico: servico, descricao: descricao} ); 
  }

  cadastrarservico(){
    this.navCtrl.push(CadastrarServicoPage); 
  }

}


