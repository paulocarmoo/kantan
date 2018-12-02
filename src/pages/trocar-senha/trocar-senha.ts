import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EdicaoPerfilPage } from '../edicao-perfil/edicao-perfil';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the TrocarSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trocar-senha',
  templateUrl: 'trocar-senha.html',
})
export class TrocarSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrocarSenhaPage');
  }

  salvarsenha(position: string){
    this.navCtrl.push(EdicaoPerfilPage); 
      let toast = this.toastCtrl.create({
        message: 'Senha salva',
        duration: 2000,
        position: position
      });
  
      toast.present(toast);
    }

}
