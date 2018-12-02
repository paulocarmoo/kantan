import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TelaLoginPage } from '../tela-login/tela-login';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { OpcoesInicialPage } from '../opcoes-inicial/opcoes-inicial';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the EsqueciSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-esqueci-senha',
  templateUrl: 'esqueci-senha.html',
})
export class EsqueciSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController,public toastCtrl: ToastController) {
  }

  @ViewChild(Slides) slides: Slides;

  proximo() {
    this.slides.slideNext();
    
  }

  voltar() {
    this.slides.slidePrev();
    
  }

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EsqueciSenhaPage');
  }

  salvarSenha() {
    const loader = this.loadingCtrl.create({
      content: "Salvando sua nova senha...",
      duration: 3000
    }); 
    const toast = this.toastCtrl.create({
      message: 'Senha salva',
      duration: 3000     
    });
    loader.present();
    this.navCtrl.push(TelaLoginPage);
    toast.present();
  }


  goToOpcoesInicial(){
  this.navCtrl.push(OpcoesInicialPage);
}

  ngAfterViewInit() {
    this.slides.freeMode = false;
  }

}
