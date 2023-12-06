import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  articleList: any[]
  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleList = this.articleService.getNewsSectionDataList();
  }

}
