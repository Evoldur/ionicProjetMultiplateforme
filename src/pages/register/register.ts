import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ViewController, AlertController } from 'ionic-angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../services/auth.service';
import {s} from "@angular/core/src/render3";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  myForm: FormGroup;
  signupError : string;
  constructor(
    public viewController: ViewController,
    public  alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    private navController : NavController,
    private auth: AuthService) {
    this.myForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      prenom:         ['', Validators.compose([Validators.required])],
      nom:            ['', Validators.compose([Validators.required])],
      pswd:       ['', Validators.compose([Validators.required])],
      confirmPassword: ['', Validators.compose([Validators.required])],
      dateDeNaissance:['', Validators.compose([Validators.required])]
    });
  }

  closeRegister(){
    this.viewController.dismiss();
  }

  signup() {
    if( this.validateForm()){
      let data = this.myForm.value;
      let credentials = {
        email: data.email,
        password: data.pswd
      };
      this.auth.signUp(credentials).then(
        () => this.navController.setRoot(HomePage),
        error => this.signupError = error.message
      );
    }
    else{
      this.presentAlertBadForm();
    }
  }

  presentAlertBadForm() {
    let alert = this.alertCtrl.create({
      title: 'Mot de passe oublié :',
      message: 'Dommage ! Fallait s\'en rappeler :) ',
      buttons: ['Fermer']
    });
    alert.present();
  }

  validateForm(): boolean {
    let data = this.myForm.value;
    return data.pswd == data.confirmPassword;
  }
}
