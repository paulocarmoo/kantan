import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarServicoPage } from './cadastrar-servico';

@NgModule({
  declarations: [
    CadastrarServicoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarServicoPage),
  ],
})
export class CadastrarServicoPageModule {}
