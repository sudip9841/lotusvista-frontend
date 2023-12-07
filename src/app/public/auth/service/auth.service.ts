import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel, SignupModel, TokenInfo } from '../interface/auth.types';
import { Observable, from } from 'rxjs';
import {AngularFireAuth} from '@angular/fire/compat/auth';
export const localStorageConstant = {
  token: 'auth_token'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private angularFireAuth:AngularFireAuth
  ) { }

  login(login: LoginModel): Observable<any> {
    return from(this.angularFireAuth.signInWithEmailAndPassword(login.email,login.password));
  }

  signup(signup: SignupModel): Observable<any> {
    return from(this.angularFireAuth.createUserWithEmailAndPassword(signup.email,signup.password));
  }

  checkLogin(): boolean {
    const token = this.getToken();
    return !!token;
  }

  getToken(): TokenInfo | undefined {
    const token = localStorage.getItem(localStorageConstant.token);
    if (token) return JSON.parse(token);
    else return null;
  }

  storeToken(login: TokenInfo): void {
    localStorage.setItem(localStorageConstant.token, JSON.stringify(login));
  }

  removeToken():void{
    localStorage.removeItem(localStorageConstant.token);
  }

}
