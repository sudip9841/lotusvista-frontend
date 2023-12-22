import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private/private.component';

const routes: Routes = [
  {
    path:'',
    component:PrivateComponent,
    children:[
      {
        path:'',
        redirectTo:'dashboard',
        pathMatch:'full'
      },
      {
        path:'dashboard',
        loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path:'message',
        loadChildren:()=>import('./message/message.module').then(m=>m.MessageModule)
      },
      {
        path:'contact',
        loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)
      },
      {
        path:'schedule-appointment',
        loadChildren:()=>import('./schedule-appointment/schedule-appointment.module').then(m=>m.ScheduleAppointmentModule)
      },
      {
        path:'appointment-history',
        loadChildren:()=>import('./appointment-history/appointment-history.module').then(m=>m.AppointmentHistoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
