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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
