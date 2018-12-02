import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OpcoesInicialPage } from '../pages/opcoes-inicial/opcoes-inicial';
import * as firebase from 'firebase';




export const environment = {
  production: false,
  apiKey: 'AIzaSyA7Kxdms4ui1fL8a3ZWMzeekKeI8nxBhsw',
  authDomain: 'kantan-f8740.firebaseapp.com',
  databaseURL: 'https://kantan-f8740.firebaseio.com',
  projectId: 'kantan-f8740',
  storageBucket: 'kantan-f8740.appspot.com',
  messagingSenderId: "388290850656",
};

@Component
({
  templateUrl: 'app.html',
}
)


export class MyApp {
  rootPage:any = OpcoesInicialPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    
  }

  
}
