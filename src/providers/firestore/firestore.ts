import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import * as firebase from "firebase";

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  db = firebase.firestore();

  constructor(public firestore: AngularFirestore) {}

  createUser( email: string, prenom: string, nom: string, dateNaissance : string){
    /*return this.firestore.doc(`utilisateurs/`).set({
      email,
      nom,
      prenom,
      dateNaissance,
    });*/
    var myCollection =  this.db.collection("utilisateurs");
    return myCollection.add({
      email: email,
      prenom: prenom,
      nom: nom,
      dateNaissance : dateNaissance
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

}
