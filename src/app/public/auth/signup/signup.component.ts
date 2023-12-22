import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/auth/service/auth.service';
import { FirebaseErrorHandleService } from 'src/shared/services/firebase-error-handle.service';
import { FormService } from 'src/shared/services/form.service';
import { SpinnerService } from 'src/shared/services/spinner.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly formService: FormService,
    private readonly toastrService: ToastrService,
    private readonly firebaseErrorHandleService:FirebaseErrorHandleService,
    private readonly spinner:SpinnerService
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2:['',[Validators.required]]
    });
  }

  signup(): void {
    if (this.signupForm.invalid) return this.formService.validateAllFormFields(this.signupForm);

    const {password,password2} = this.signupForm.value;
    if(password!=password2){
      this.toastrService.error("Password and Confirm Password did not match.");
      return;
    }

    this.spinner.showSpinner();
    const {email,password:pass} = this.signupForm.value;
    this.authService.signup(email,pass,'user').subscribe({
      next: (response) => {
        this.toastrService.success('Signup Successful!')
        this.router.navigate(['auth/login']);
      },
      error:(error)=>{        
        this.firebaseErrorHandleService.handleFirebaseError(error);
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
