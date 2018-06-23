import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from "../services/auth.service";
import { AccueilPage } from '../pages/accueil/accueil';
import {ConnexionPage} from "../pages/connexion/connexion";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AccueilPage;

  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private authService : AuthService
  ){
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });

    this.authService.afAuth.authState
      .subscribe(
        user => {
          if (user) {
            this.rootPage = AccueilPage;
          } else {
            this.rootPage = ConnexionPage;
          }
        },
        () => {
          this.rootPage = ConnexionPage;
        }
      );
  }

  logout() {
    this.authService.signOut();
    this.rootPage = AccueilPage;
  }
}

