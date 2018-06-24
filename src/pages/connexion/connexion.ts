import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavParams, ViewController, AlertController, NavController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import {RegisterPage} from "../register/register";
import {AccueilPage} from "../accueil/accueil";

/**
 * Generated class for the ConnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})



export class ConnexionPage {

  loginForm: FormGroup;
  loginError: string;

  constructor(
    public modalController: ModalController,
    public navParams: NavParams,
    public viewController: ViewController,
    private alertCtrl: AlertController,
    private auth: AuthService,
    private navController : NavController,
    formBuilder: FormBuilder

  ){
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navController.setRoot(AccueilPage),
        error => this.loginError = error.message
      );
  }

  loginWithGoogle(){
    this.auth.signInWithGoogle()
      .then(
        () => this.navController.setRoot(AccueilPage),
        error => this.loginError = error.message
      );
  }

  signup(){
    this.navController.setRoot(RegisterPage);
  }

  closeRegister(){
    this.viewController.dismiss();
  }
}
