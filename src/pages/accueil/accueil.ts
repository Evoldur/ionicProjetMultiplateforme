import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ConnexionPage} from "../connexion/connexion";
import { RegisterPage} from "../register/register";

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})

export class AccueilPage {

  constructor(public modalCtrl: ModalController) {

  }

  presentModalConnexion() {
    const modal = this.modalCtrl.create(ConnexionPage);
    modal.present();
  }

  presentModalRegister() {
    const modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }
}
