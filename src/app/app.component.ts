import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import firebase from 'firebase';


import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    firebase.initializeApp({
      apiKey: "AIzaSyC2gGVlBGrBxTS4IxauvXq-HsFLwcnNHtM",
      authDomain: "llama-lounge.firebaseapp.com",
      databaseURL: "https://llama-lounge.firebaseio.com",
      projectId: "llama-lounge",
      storageBucket: "llama-lounge.appspot.com",
      messagingSenderId: "18272820898"
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
const unsubscribe = firebase.auth().onAuthStateChanged( user => {
  if (!user) {
    this.rootPage = 'LoginPage';
    unsubscribe();
  } else {
    this.rootPage = HomePage;
    unsubscribe();
  }
});
