import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleAppointmentRoutingModule } from './schedule-appointment-routing.module';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';


@NgModule({
  declarations: [
    ScheduleAppointmentComponent
  ],
  imports: [
    CommonModule,
    ScheduleAppointmentRoutingModule
  ]
})
export class ScheduleAppointmentModule { }
