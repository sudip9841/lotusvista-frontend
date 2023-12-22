import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';
import { ArticleDetatilsComponent } from './article-detatils/article-detatils.component';



@NgModule({
  declarations: [
    ArticleComponent,
    ArticleDetatilsComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    
  ]
})
export class ArticleModule { }
