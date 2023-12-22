import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, SignupModel, TokenInfo } from '../interface/auth.types';
import { Observable, catchError, from, switchMap } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
export const localStorageConstant = {
  token: 'auth_token'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private angularFireAuth:AngularFireAuth,
    private fireStore:AngularFirestore
  ) { }
  
  private accessTokenKey = 'accessToken';
  private refreshTokenKey = 'refreshToken';
  private uIdKey = 'uId';
  private expirationTimeKey = 'expirationTime';

  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private uId: string | null = null;
  private expirationTime: number | null = null;

  setTokens(accessToken: string, refreshToken: string): void {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  setUserInfo(uId: string): void {
    this.uId = uId;
    localStorage.setItem(this.uIdKey, uId);
  }

  setExpirationTime(expirationTime: number): void {
    this.expirationTime = expirationTime;
    localStorage.setItem(this.expirationTimeKey, expirationTime.toString());
  }

  getAccessToken(): string | null {
    return this.accessToken || localStorage.getItem(this.accessTokenKey);
  }

  getRefreshToken(): string | null {
    return this.refreshToken || localStorage.getItem(this.refreshTokenKey);
  }

  getUId(): string | null {
    return this.uId || localStorage.getItem(this.uIdKey);
  }

  getExpirationTime(): number | null {
    return this.expirationTime || parseInt(localStorage.getItem(this.expirationTimeKey) || '0', 10);
  }

  isLoggedIn(): boolean {
    // You can customize this logic based on your requirements
    return !!this.getAccessToken() && !!this.getUId() && !!this.getExpirationTime();
  }

  clearTokens(): void {
    this.accessToken = null;
    this.refreshToken = null;
    this.uId = null;
    this.expirationTime = null;
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.uIdKey);
    localStorage.removeItem(this.expirationTimeKey);
  }


  login(login: LoginModel): Observable<any> {
    return from(this.angularFireAuth.signInWithEmailAndPassword(login.email,login.password));
  }

  // signup(signup: SignupModel): Observable<any> {
  //   return from(this.angularFireAuth.createUserWithEmailAndPassword(signup.email,signup.password));
  // }

  signup(email: string, password: string, role: string): Observable<void> {
    return from(this.angularFireAuth.createUserWithEmailAndPassword(email, password)).pipe(
      switchMap(userCredential => {
        const user = userCredential.user;
  
        return from(this.fireStore.doc(`roles/${user.uid}`).set({
          userId: user.uid,
          role: role,
        }));
      }),
      catchError(error => {
        console.error('Error during signup:', error);
        throw error;
      })
    );
  }

}
