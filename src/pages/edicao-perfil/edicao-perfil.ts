import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { TrocarSenhaPage } from '../trocar-senha/trocar-senha';
import { PerfilPage } from '../perfil/perfil';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EdicaoPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edicao-perfil',
  templateUrl: 'edicao-perfil.html',
})
export class EdicaoPerfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EdicaoPerfilPage');
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Mais opções',
      buttons: [
        {
          text: 'Desativar conta',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  trocarsenha(){
    this.navCtrl.push(TrocarSenhaPage); 
  }

  salvar(position: string){
    this.navCtrl.push(PerfilPage); 
      let toast = this.toastCtrl.create({
        message: 'Seu perfil está atualizado',
        duration: 2000,
        position: position
      });
  
      toast.present(toast);
    }
}
