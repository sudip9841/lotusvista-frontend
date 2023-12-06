import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/public/auth/service/auth.service';
import { FormService } from 'src/shared/services/form.service';

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
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  signup(): void {
    if (this.signupForm.invalid) return this.formService.validateAllFormFields(this.signupForm);
    this.authService.signup(this.signupForm.value).subscribe({
      next: (response) => {
        this.toastrService.success('Signup Successful!')
        this.router.navigate(['auth/login']);
      }
    });
  }

  checkFormControlInvalid(formControlName: string, formGroup: FormGroup): boolean {
    return this.formService.checkFormControlInvalid(formControlName, formGroup);
  }

}
