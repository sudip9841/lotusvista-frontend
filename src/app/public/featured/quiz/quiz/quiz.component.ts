import { Component, OnInit } from '@angular/core';
import { QuizService } from '../service/quiz.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  mentalHealthForm: FormGroup;

  questions :any[] = [];

  message:string = ''
  showMessage:boolean = false;

  constructor(private quizService:QuizService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.questions = this.quizService.getAllQUestions();
    this.initializeForm();
  }

  initializeForm():void{
    // Create a form group with dynamic form controls
    const formGroupConfig: Record<string, any> = {};

    this.questions.forEach((question, index) => {
      formGroupConfig[`question${index}`] = [null, Validators.required];
    });

    this.mentalHealthForm = this.fb.group(formGroupConfig);
  }

  onSubmit() {
    if (this.mentalHealthForm.valid) {
      // Calculate the score or perform other actions
      this.calculateScore();
    } else {
      // Mark all fields as touched to show validation messages
      this.markFormGroupTouched(this.mentalHealthForm);
    }
  }

  
  // Recursive function to mark all form controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }



  calculateScore() {
  
    const interpretations: Record<string, string> = {
      'Excellent': 'Excellent mental health! Keep it up!',
      'Good': 'Good mental health. Stay positive!',
      'Average': 'Average mental health. Take care of yourself.',
      'Poor': 'Poor mental health. Consider seeking support.',
    };
   
    const totalScore = this.questions.reduce((acc, question, index) => {
      const answer = this.mentalHealthForm.get(`question${index}`).value;
      return acc + answer;
    }, 0);
   
    // Calculate the total possible score (maximum positive score for 9 questions)
    const totalPossibleScore = 9 * 4;

    // Calculate the percentage of the total possible score achieved
    const percentage = (totalScore / totalPossibleScore) * 100;

   // Determine the corresponding interpretation based on the percentage
    if (percentage >= 75) {
      this.message = interpretations['Excellent'];
    } else if (percentage >= 50) {
      this.message =  interpretations['Good'];
    } else if (percentage >= 25) {
      this.message = interpretations['Average'];
    } else {
      this.message = interpretations['Poor'];
    } 

    const isConfirmed = window.confirm(this.message);

    if (isConfirmed) {
      this.message = '';
      this.mentalHealthForm.reset();
    } else {
      this.message = '';
      this.mentalHealthForm.reset();
    }

  }

}
