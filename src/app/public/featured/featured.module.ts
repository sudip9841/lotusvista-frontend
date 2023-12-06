import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './featured/featured.component';
import { MainHeaderModule } from 'src/shared/templates/main-header/main-header.module';
import { MainFooterModule } from 'src/shared/templates/main-footer/main-footer.module';


@NgModule({
  declarations: [
    FeaturedComponent
  ],
  imports: [
    CommonModule,
    FeaturedRoutingModule,
    MainHeaderModule,
    MainFooterModule
  ]
})
export class FeaturedModule { }
