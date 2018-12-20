import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OpcoesInicialPage } from '../opcoes-inicial/opcoes-inicial';
import { EdicaoPerfilPage } from '../edicao-perfil/edicao-perfil';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})

export class PerfilPage {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  cidade: string;
  bairro: string;
  cpf: string;
  perfil:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastController) { 
    
     }

  ionViewDidLoad() {
  } 

  sair(position: string) {
  
        this.navCtrl.push(OpcoesInicialPage);
        this.toast.create({
          message: 'Esperamos ver você novamente!', duration: 3000, position: position
    
      })
  }

  editar() {
  this.navCtrl.push(EdicaoPerfilPage);
  }
}
