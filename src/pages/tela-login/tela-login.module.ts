import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaLoginPage } from './tela-login';

import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    TelaLoginPage,
  ],
  imports: [
    BrMaskerModule,
    IonicPageModule.forChild(TelaLoginPage),
  ],
})
export class TelaLoginPageModule {}
