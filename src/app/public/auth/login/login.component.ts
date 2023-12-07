import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from 'src/shared/services/form.service';
import { AuthService } from 'src/app/public/auth/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import {LoginModel} from '../interface/auth.types';
import { FirebaseErrorHandleService } from 'src/shared/services/firebase-error-handle.service';
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
    private readonly firebaseErrorHandleService: FirebaseErrorHandleService
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

    // if(email=='bhumika' && password=='bhumika'){
    //   const dummyToken:TokenInfo = {
    //     access_token:'abcd',
    //     expires_in:10000,
    //     refresh_token:'abcd',
    //     token_type:'Bearer'
    //   }
    //   this.authService.storeToken(dummyToken);
    //   this.router.navigate(['/user'])
    // }else{
    //   this.toastrService.error("Invalid email or Password.")
    // }
    this.authService.login(requestBody).subscribe({
      next: (response) => {
        this.toastrService.success('Login Successful!')
        this.router.navigate(['user']);
      },
      error:(error)=>{
        this.firebaseErrorHandleService.handleFirebaseError(error)
      }
    });
  }

  checkFormControlInvalid(formControlName: string, formGroup: FormGroup): boolean {
    return this.formService.checkFormControlInvalid(formControlName, formGroup);
  }

}
