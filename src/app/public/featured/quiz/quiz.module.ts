import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { SharedModule } from 'src/shared/modules/shared/shared.module';


@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    SharedModule
  ]
})
export class QuizModule { }
