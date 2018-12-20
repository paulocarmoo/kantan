import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import { AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: 'page-criar-dados-pessoais',
  templateUrl: 'criar-dados-pessoais.html',
})
export class CriarDadosPessoaisPage {
  usuario: string = "";
  senha: string = "";
  email: string = "";
  nome: string = "";
  sobrenome: string = "";
  telefone: string = "";
  cpf: string = "";
  cidade: string = "";
  bairro: string = "";
  nascimento: any;
  confirmarsenha: string = "";
  termosecondicoes: boolean = false;
  user: any;

  @ViewChild(Slides) slides: Slides;

  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {
  }


  ionViewDidLoad() {
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  }

  proximoslide2() {
    
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToNext(true);
    
  }

  proximoslide3() {
   
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToNext(true);
    
  }

  proximoslide4() {
    
      this.slides.lockSwipeToNext(false);
      this.slides.slideNext();
      this.slides.lockSwipeToNext(true);
    
  }
  proximoslide5() {
    
        this.slides.lockSwipeToNext(false);
        this.slides.slideNext();
        this.slides.lockSwipeToNext(true);
      
    }



  validar(position: string) {
    
              let toast = this.toastCtrl.create({
                message: "Seja bem-vindo(a) ao Kantan!",
                duration: 3000,
                position: position
              });

              toast.present(toast);
              this.navCtrl.push(TabsPage);
            }

  voltar() {
    this.slides.lockSwipeToPrev(false);
    this.slides.slidePrev();
    this.slides.lockSwipeToPrev(true);
  }

}
