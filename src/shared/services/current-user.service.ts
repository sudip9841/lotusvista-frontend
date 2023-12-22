import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, catchError, map, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {
  user$: Observable<any>;
  
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.doc(`roles/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
      catchError(error => {
        console.error('Error retrieving user information:', error);
        return of(null);
      })
    );
  }

  getUserRole(): Observable<string | null> {
    return this.user$.pipe(map(user => user?.role || null));
  }

  getAdminMenu():any[]{
    let menu = [
      {
        name:'Dashboard',
        url:'/user/dashboard'
      },
      {
        name:'Contact Message',
        url:'/user/contact'
      }
    ];

    return menu;
  }

  getUserMenu():any[]{
    let menu = [
      {
        name:'Dashboard',
        url:'/user/dashboard'
      },
      {
        name:'Appointment Schedule',
        url:'schedule-appointment'
      },
      {
        name:'Appointment History',
        url:'/user/appointment-history'
      },
      {
        name:'messsage',
        url:'/user/message'
      },
    ]
    return menu;
  }

  getTherapistMenu():any[]{
    let menu = [ 
      {
        name:'Dashboard',
        url:'/user/dashboard'
      },
      {
        name:'Appointment History',
        url:'/user/appointment-history'
      },
      {
        name:'messsage',
        url:'/user/message'
      },
    ]

    return menu;
  }

}
