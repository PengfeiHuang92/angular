
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/app';
@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {

  user : any;
  displayName : any;
  constructor(private afAuth: AngularFireAuth) { 
    afAuth.authState.subscribe(user => {
      this.user = user;
      this.displayName = user?.displayName;
  });
}
  signOut() {
    this.afAuth.signOut();
  }

}
