import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './public/auth/guard/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./public/public.module').then(m=>m.PublicModule)
  },
  {
    path:'user',
    canActivate: [AuthGuard],
    loadChildren:()=>import('./private/private.module').then(m=>m.PrivateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
