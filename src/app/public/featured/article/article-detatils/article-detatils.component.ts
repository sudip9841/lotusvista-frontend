import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../service/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-article-detatils',
  templateUrl: './article-detatils.component.html',
  styleUrls: ['./article-detatils.component.scss']
})
export class ArticleDetatilsComponent implements OnInit {
  
  articleDetails:object;
  constructor(private articleService:ArticleService, private route:ActivatedRoute,
    private router:Router, private toastrService:ToastrService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    const article = this.articleService.getNewsSectionDataList().find(ele=>ele?.id==id);
    if(article){
      this.articleDetails = article;
    }else{
      this.toastrService.error("Invalid article id.")
      this.router.navigate(['/'])
    }
  }

}
