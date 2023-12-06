import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetatilsComponent } from './article-detatils.component';

describe('ArticleDetatilsComponent', () => {
  let component: ArticleDetatilsComponent;
  let fixture: ComponentFixture<ArticleDetatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleDetatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
