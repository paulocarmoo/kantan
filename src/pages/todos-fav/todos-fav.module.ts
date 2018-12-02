import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosFavPage } from './todos-fav';

@NgModule({
  declarations: [
    TodosFavPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosFavPage),
  ],
})
export class TodosFavPageModule {}
