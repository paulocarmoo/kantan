import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { CriarDadosPessoaisPage } from './criar-dados-pessoais';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CriarDadosPessoaisPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarDadosPessoaisPage),
    BrMaskerModule,
    ],
})
export class CriarDadosPessoaisPageModule {}
