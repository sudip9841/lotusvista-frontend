import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/shared/services/data.service';
import { FormService } from 'src/shared/services/form.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  contactForm:FormGroup;

  constructor(private fb:FormBuilder,
    public formService:FormService,
    private dataService:DataService,
    private toastService:ToastrService) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm():void{
    this.contactForm = this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      message:['',[Validators.required]]
    })
  }

  submitContactForm():void{
    if(this.contactForm.invalid){
      this.formService.validateAllFormFields(this.contactForm);
      return;
    }
    this.saveContactForm(this.contactForm.value);
  }

  saveContactForm(data):void{
    this.dataService.addItem('contact', data).subscribe(
      {
        next:()=>{
          this.toastService.success("Message sent sucessfully.")
          this.contactForm.reset();
        },
        error:()=>{
          this.toastService.error("Error");
        }
      }
    );
  }

}
