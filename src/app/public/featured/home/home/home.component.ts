import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { ArticleService } from '../../article/service/article.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newsSectionDataList : any[];
  constructor(private homeService:HomeService,
    private articleService:ArticleService) { }

  ngOnInit(): void {
    this.newsSectionDataList = this.articleService.getNewsSectionDataList();
  }

}
