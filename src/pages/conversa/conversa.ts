
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MensagensPage } from '../mensagens/mensagens';
/**
 * Generated class for the ConversaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-conversa',
  templateUrl: 'conversa.html',
})


export class ConversaPage {



  @ViewChild('mensagem') mensagem: ElementRef; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
ionViewDidLoad() {
  console.log('ionViewDidLoad ConversaPage');
}

}

