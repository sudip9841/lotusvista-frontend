import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { DataService } from 'src/shared/services/data.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  articleList: any[]
  constructor(private articleService:ArticleService, private dataService:DataService) { }

  ngOnInit(): void {
    // this.articleList = this.articleService.getNewsSectionDataList();
    this.setArticleList();
  }

  setArticleList(){
   this.dataService.getItems('articles').subscribe(res=>{
    this.articleList = res;
   })
  }


}
