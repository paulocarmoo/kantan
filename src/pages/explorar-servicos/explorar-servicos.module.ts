import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExplorarServicosPage } from './explorar-servicos';

@NgModule({
  declarations: [
    ExplorarServicosPage,
  ],
  imports: [
    IonicPageModule.forChild(ExplorarServicosPage),
  ],
})
export class ExplorarServicosPageModule {}
