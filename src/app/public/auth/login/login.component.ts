import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/shared/services/form.service';
import { AuthService } from 'src/app/public/auth/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import {LoginModel} from '../interface/auth.types';
import { FirebaseErrorHandleService } from 'src/shared/services/firebase-error-handle.service';
import { SpinnerService } from 'src/shared/services/spinner.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly formService: FormService,
    private readonly toastrService: ToastrService,
    private readonly firebaseErrorHandleService: FirebaseErrorHandleService,
    private readonly spinner:SpinnerService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    if (this.loginForm.invalid) return this.formService.validateAllFormFields(this.loginForm);
    const {email, password} = this.loginForm.value;
    const requestBody:LoginModel = {
      email:email,
      password:password
    }
    this.spinner.showSpinner();
    this.authService.login(requestBody).subscribe({
      next: (response) => {
      console.log(response);
      const { uid, stsTokenManager } = response.user._delegate;
      const { accessToken, refreshToken, expirationTime } = stsTokenManager;
      this.authService.setTokens(accessToken,refreshToken);
      this.authService.setUserInfo(uid);
      this.authService.setExpirationTime(expirationTime);
      this.toastrService.success("Login successful")
      this.router.navigate(['user']);
      },
      error:(error)=>{
        this.firebaseErrorHandleService.handleFirebaseError(error)
        this.spinner.hideSpinner();
      },
      complete:()=>{
        this.spinner.hideSpinner();
      }
    });
  }

  checkFormControlInvalid(formControlName: string, formGroup: FormGroup): boolean {
    return this.formService.checkFormControlInvalid(formControlName, formGroup);
  }

}
