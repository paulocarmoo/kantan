import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { EsqueciSenhaPage } from "../esqueci-senha/esqueci-senha";
import { ToastController } from "ionic-angular";
import { FormGroup } from "@angular/forms";
import { AlertController } from "ionic-angular";
import { AuthService } from "../../services/auth.service";

/**
 * Generated class for the TelaLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-tela-login",
  templateUrl: "tela-login.html"
})
export class TelaLoginPage {
  form: FormGroup;
  senha: any;
  email: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    private auth: AuthService
  ) {
    this.email = "";
    this.senha = "";
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TelaLoginPage");
  }

  goToTabsPage(position: string) {
    if (this.email == "" && this.senha == "") {
      const alert = this.alertCtrl.create({
        title: "Algo errado!",
        subTitle: "Você não digitou suas informações de login",
        buttons: ["OK"]
      });
      alert.present();
    } else if (this.senha == "") {
      const alert = this.alertCtrl.create({
        title: "Algo errado!",
        subTitle: "Não esqueça de inserir senha",
        buttons: ["OK"]
      });
      alert.present();
    } else {
      let credentials = {
        email: this.email,
        password: this.senha
      };
      let self = this;
      this.auth.signInWithEmail(credentials).then(
        () => {
          self.navCtrl.push(TabsPage);
          let toast = self.toastCtrl.create({
            message: "Bem-vindo(a) de volta Kantan",
            duration: 3000,
            position: position
          });

          toast.present(toast);
        },
        error => console.log
      );
    }
  }

  goToEsqueciSenhaPage() {
    this.navCtrl.push(EsqueciSenhaPage);
  }
}
