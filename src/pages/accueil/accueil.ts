import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ConnexionPage} from "../connexion/connexion";
import { HomePage} from "../home/home";

@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html'
})

export class AccueilPage {

  constructor(public modalCtrl: ModalController) {

  }

  presentModal() {
    const modal = this.modalCtrl.create(ConnexionPage);
    modal.present();
  }
}
