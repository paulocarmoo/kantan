import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaLoginPage } from '../tela-login/tela-login';
import { CriarDadosPessoaisPage } from '../criar-dados-pessoais/criar-dados-pessoais';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-opcoes-inicial',
  templateUrl: 'opcoes-inicial.html',
})
export class OpcoesInicialPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    
  }

  

  ionViewDidLoad() {
  }

  goToLoginPage(){
    this.navCtrl.push(TelaLoginPage);
  }

  goToCriarDadosPessoaisPage() {
    this.navCtrl.push(CriarDadosPessoaisPage);
  }

  proximo() {
    this.slides.slideNext();
    this.slides.stopAutoplay()
    
  }

  primeiro(){
    this.slides.slideTo(1);
    this.slides.stopAutoplay()
  }

 

}
