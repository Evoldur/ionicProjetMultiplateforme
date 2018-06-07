import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ConnectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-connexion',
  templateUrl: 'connexion.html',
})

export class ConnexionPage {

  username : string;
  password : string;

  constructor(public modalController: ModalController, public navParams: NavParams, public viewController: ViewController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnexionPage');
  }

  closeConnection(){
    this.viewController.dismiss();
  }

  connexion(){
    console.log("Login : "+this.username)
    console.log("Password : "+this.password)
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Mot de passe oublié :',
      message: 'Dommage ! Fallait s\'en rappeler :) ',
      buttons: ['Fermer']
    });
    alert.present();
  }
}
