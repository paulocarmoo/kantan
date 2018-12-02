import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExplorarPage } from '../explorar/explorar';

import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AvaliarServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-avaliar-servico',
  templateUrl: 'avaliar-servico.html',
})
export class AvaliarServicoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AvaliarServicoPage');
  }

  public tap: string = "👍 Recomendado";
  tapEvent(e) {
    if(this.tap =="👍 Recomendado"){
    this.tap="👎 Não Recomendado";}
    else{
    this.tap="👍 Recomendado";
    }
  }


  salvaravaliacao(position: string){
    this.navCtrl.push(ExplorarPage); 
      let toast = this.toastCtrl.create({
        message: 'Obrigado pela avaliação',
        duration: 2000,
        position: position
      });
  
      toast.present(toast);
    }
}
