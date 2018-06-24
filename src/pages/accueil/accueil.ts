import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ConnexionPage} from "../connexion/connexion";
import { RegisterPage} from "../register/register";
import { AuthService} from "../../services/auth.service";

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})

export class AccueilPage {

  constructor(public modalCtrl: ModalController, private authService : AuthService) {

  }

  presentModalConnexion() {
    const modal = this.modalCtrl.create(ConnexionPage);
    modal.present();
  }

  presentModalRegister() {
    const modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }

  userIsLoged(): boolean {
    return this.authService.getEmail() != null;
  }

  deconnexion(){
    this.authService.signOut();
  }
}
