import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleDetatilsComponent } from './article-detatils/article-detatils.component';

const routes: Routes = [
  {
    path:'',
    component:ArticleComponent
  },
  {
    path:'details/:id',
    component:ArticleDetatilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
