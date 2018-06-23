import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule, NavController} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { GooglePlus } from '@ionic-native/google-plus';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccueilPage } from '../pages/accueil/accueil';
import { ConnexionPage } from '../pages/connexion/connexion'
import { RegisterPage } from '../pages/register/register'
import {ComponentsModule} from "../components/components.module";
import { CommonModule } from '@angular/common';
import {AngularFirestore} from "angularfire2/firestore";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { firebaseConfig } from '../firebaseconfig';
import {AuthService} from "../services/auth.service";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AccueilPage,
    ConnexionPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig.config),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AccueilPage,
    ConnexionPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ],
})

export class AppModule {
}
