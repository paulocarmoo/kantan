import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { ExplorarPage } from '../explorar/explorar';
import { PerfilPage } from '../perfil/perfil';
import { MensagensPage } from '../mensagens/mensagens';
import { HistoricoPage } from '../historico/historico';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab0Root = ExplorarPage;
  tab1Root = MensagensPage;
  tab2Root = PerfilPage;
  tab3Root = HistoricoPage;
  tab4Root = ContactPage;
  

  constructor() {
  }
  }
