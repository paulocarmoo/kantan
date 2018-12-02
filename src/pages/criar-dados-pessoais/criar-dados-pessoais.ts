import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the CriarDadosPessoaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-dados-pessoais',
  templateUrl: 'criar-dados-pessoais.html',
})
export class CriarDadosPessoaisPage {
  @ViewChild(Slides) slides: Slides;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarDadosPessoaisPage');
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

proximoslide4(){
  this.slides.lockSwipeToNext(false);
  this.slides.slideNext();
  this.slides.lockSwipeToNext(true);
}
proximoslide5(){
  this.slides.lockSwipeToNext(false);
  this.slides.slideNext();
  this.slides.lockSwipeToNext(true);
}

goToTabsPage(position: string){
  this.navCtrl.push(TabsPage); 
    let toast = this.toastCtrl.create({
      message: 'Seja muito bem-vindo(a) ao Kantan',
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

}
