import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/modules/shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { NgxSpinnerModule } from "ngx-spinner";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpServiceInterceptor} from 'src/app/public/auth/interceptors/http-service.interceptor';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyD-UyBz97AftappzjQXGIT6s99iIb8zCk8",
      authDomain: "londonvista-546c1.firebaseapp.com",
      projectId: "londonvista-546c1",
      storageBucket: "londonvista-546c1.appspot.com",
      messagingSenderId: "910664312194",
      appId: "1:910664312194:web:aa32ae7ee8c0ad530a9b9b",
      measurementId: "G-7HR2LENK37"
     
    }),
    AngularFireAuthModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:HttpServiceInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
