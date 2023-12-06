import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  checkFormControlInvalid(controlToCheck: string, form: FormGroup) {
    let field = form.get(controlToCheck);
    return field != null && field.invalid && (field.touched || field.dirty);
  }

  validateAllFormFields(currentForm: FormGroup) {
    let firstInvalidElement: string = null;
    Object.keys(currentForm.controls).forEach((field) => {
      const control = currentForm.get(field);
      if (control.status == 'INVALID' && firstInvalidElement == null) firstInvalidElement = field;
      
      if (control instanceof FormControl) control.markAsTouched({ onlySelf: true });
      else if (control instanceof FormGroup) this.validateAllFormFields(control);
    });
  
    if (firstInvalidElement) {
      const element: HTMLElement = document.querySelector(
        "[formControlName='" + firstInvalidElement + "']"
      );
      if (element) {
        element.focus();
      }
    }
  }
}
