import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private afAuth: AngularFireAuth) {
 
  }
  signInWithGoogle() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(() => {
      return this.afAuth.getRedirectResult().then(result => {
        console.log(result);        
      })
    }).catch((err) => {
      console.error(err);
    });
    console.log("Hello");
  }



}
