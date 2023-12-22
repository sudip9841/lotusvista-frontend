import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleAppointmentComponent } from './schedule-appointment/schedule-appointment.component';

const routes: Routes = [
  {
    path:'',
    component:ScheduleAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleAppointmentRoutingModule { }
