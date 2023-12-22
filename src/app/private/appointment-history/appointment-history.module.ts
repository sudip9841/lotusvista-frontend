import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentHistoryRoutingModule } from './appointment-history-routing.module';
import { AppointmentHistoryComponent } from './appointment-history/appointment-history.component';


@NgModule({
  declarations: [
    AppointmentHistoryComponent
  ],
  imports: [
    CommonModule,
    AppointmentHistoryRoutingModule
  ]
})
export class AppointmentHistoryModule { }
