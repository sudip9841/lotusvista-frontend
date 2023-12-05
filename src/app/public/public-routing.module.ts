import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public/public.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {
        path:'',
        redirectTo:'featured',
        pathMatch:'full'
      },
      {
        path:'featured',
        loadChildren:()=>import('./featured/featured.module').then(m=>m.FeaturedModule)
      },
      {
        path:'auth',
        loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
