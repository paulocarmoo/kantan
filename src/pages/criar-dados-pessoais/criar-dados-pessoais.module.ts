import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { CriarDadosPessoaisPage } from './criar-dados-pessoais';

@NgModule({
  declarations: [
    CriarDadosPessoaisPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarDadosPessoaisPage),
    ],
})
export class CriarDadosPessoaisPageModule {}
