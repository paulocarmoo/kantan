import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";
import { MyApp } from "./app.component";

import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { ExplorarPageModule } from "../pages/explorar/explorar.module";
import { PerfilPageModule } from "../pages/perfil/perfil.module";
import { MensagensPageModule } from "../pages/mensagens/mensagens.module";
import { HistoricoPageModule } from "../pages/historico/historico.module";
import { IntroPageModule } from "../pages/intro/intro.module";
import { OpcoesInicialPageModule } from "../pages/opcoes-inicial/opcoes-inicial.module";
import { OpcoesInicialPage } from "../pages/opcoes-inicial/opcoes-inicial";
import { TelaLoginPage } from "../pages/tela-login/tela-login";
import { TelaLoginPageModule } from "../pages/tela-login/tela-login.module";
import { CriarDadosPessoaisPage } from "../pages/criar-dados-pessoais/criar-dados-pessoais";
import { CriarDadosPessoaisPageModule } from "../pages/criar-dados-pessoais/criar-dados-pessoais.module";
import { TodosFavPage } from "../pages/todos-fav/todos-fav";
import { TodosFavPageModule } from "../pages/todos-fav/todos-fav.module";
import { PerfilProPage } from "../pages/perfil-pro/perfil-pro";
import { PerfilProPageModule } from "../pages/perfil-pro/perfil-pro.module";
import { EsqueciSenhaPage } from "../pages/esqueci-senha/esqueci-senha";
import { EsqueciSenhaPageModule } from "../pages/esqueci-senha/esqueci-senha.module";
import { EdicaoPerfilPageModule } from "../pages/edicao-perfil/edicao-perfil.module";
import { EdicaoPerfilPage } from "../pages/edicao-perfil/edicao-perfil";
import { MensagensPage } from "../pages/mensagens/mensagens";
import { ConversaPageModule } from "../pages/conversa/conversa.module";
import { ConversaPage } from "../pages/conversa/conversa";
import { TrocarSenhaPageModule } from "../pages/trocar-senha/trocar-senha.module";
import { TrocarSenhaPage } from "../pages/trocar-senha/trocar-senha";
import { ExplorarServicosPageModule } from "../pages/explorar-servicos/explorar-servicos.module";
import { ExplorarServicosPage } from "../pages/explorar-servicos/explorar-servicos";
import { ServicoPageModule } from "../pages/servico/servico.module";
import { ServicoPage } from "../pages/servico/servico";
import { CadastrarServicoPage } from "../pages/cadastrar-servico/cadastrar-servico";
import { CadastrarServicoPageModule } from "../pages/cadastrar-servico/cadastrar-servico.module";
import { AvaliarServicoPageModule } from "../pages/avaliar-servico/avaliar-servico.module";
import { AvaliarServicoPage } from "../pages/avaliar-servico/avaliar-servico";
import { BrMaskerModule } from "brmasker-ionic-3";

import { ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "angularfire2";
import { AngularFireAuth } from "angularfire2/auth";
import { firebaseConfig } from "../config";
import { AuthService } from "../services/auth.service";

@NgModule({
  declarations: [MyApp, AboutPage, ContactPage, HomePage, TabsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true }),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    ExplorarPageModule,
    PerfilPageModule,
    MensagensPageModule,
    HistoricoPageModule,
    IntroPageModule,
    OpcoesInicialPageModule,
    TelaLoginPageModule,
    CriarDadosPessoaisPageModule,
    TodosFavPageModule,
    PerfilProPageModule,
    EsqueciSenhaPageModule,
    EdicaoPerfilPageModule,
    ConversaPageModule,
    TrocarSenhaPageModule,
    ExplorarServicosPageModule,
    ServicoPageModule,
    CadastrarServicoPageModule,
    AvaliarServicoPageModule,
    BrMaskerModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    OpcoesInicialPage,
    TelaLoginPage,
    CriarDadosPessoaisPage,
    TodosFavPage,
    PerfilProPage,
    EsqueciSenhaPage,
    EdicaoPerfilPage,
    ConversaPage,
    TrocarSenhaPage,
    ExplorarServicosPage,
    ServicoPage,
    CadastrarServicoPage,
    AvaliarServicoPage,
    MensagensPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AuthService
  ]
})
export class AppModule {}
