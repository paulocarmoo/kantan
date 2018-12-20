import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { ToastController } from "ionic-angular";
import { AlertController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-tela-login",
  templateUrl: "tela-login.html"
})
export class TelaLoginPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TelaLoginPage");
  }

  goToTabsPage(position: string) {
          
    let toast = this.toastCtrl.create({
      message: "Bem-vindo de volta ao Kantan, Alan!",
      duration: 3000,
      position: position
    });

    toast.present(toast);
    this.navCtrl.push(TabsPage);
  
  }

  esqueciSenha() {
    
          const alert = this.alertCtrl.create({
            title: "E-mail enviado!",
            subTitle: "Se o seu e-mail estiver correto, é só seguir as intruções que enviamos para você.",
            buttons: ["OK"]
          });
          alert.present();
        }
}
