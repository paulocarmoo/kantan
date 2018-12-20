import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CadastrarServicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-servico',
  templateUrl: 'cadastrar-servico.html',
})
export class CadastrarServicoPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,  public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarServicoPage');
  }
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
}

proximoslide2(){
  this.slides.lockSwipeToNext(false);
  this.slides.slideNext();
  this.slides.lockSwipeToNext(true);
}

proximoslide3(){
  this.slides.lockSwipeToNext(false);
  this.slides.slideNext();
  this.slides.lockSwipeToNext(true);
} 


salvarservico(position: string){
  this.navCtrl.push(TabsPage); 
    let toast = this.toastCtrl.create({
      message: '👷‍♂️👷‍♀️ Serviço cadastrado, veja-o na aba Histórico',
      duration: 3000,
      position: position
    });

    toast.present(toast);
  }

voltar(){
  this.slides.lockSwipeToPrev(false);
  this.slides.slidePrev();
  this.slides.lockSwipeToPrev(true);
}

cancelar(){
  this.navCtrl.push(TabsPage);
}
}
