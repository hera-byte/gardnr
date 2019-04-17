import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyApIXIBYZH3jOXTzU8mSoaPyepOnnJS00c",
    authDomain: "gardnr-e919c.firebaseapp.com",
    databaseURL: "https://gardnr-e919c.firebaseio.com",
    projectId: "gardnr-e919c",
    storageBucket: "gardnr-e919c.appspot.com",
    messagingSenderId: "420963898679"
    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout() {
    firebase.auth().signOut();
    this.menu.close();
  }
}
