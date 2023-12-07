import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor(private readonly spinner:NgxSpinnerService) {
    console.log("inside interceport")
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log("inside interceport")

    this.spinner.show();

    return next.handle(request).pipe(finalize(()=>{
      this.spinner.hide()
    }));
  }
}
