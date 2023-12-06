import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from './featured/featured.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:FeaturedComponent,
    children:[
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'home',
        loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
      },
      {
        path:'article',
        loadChildren:()=>import('./article/article.module').then(m=>m.ArticleModule)
      },
      {
        path:'**',
        component:HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedRoutingModule { }
