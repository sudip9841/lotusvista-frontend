import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  getAllQUestions():any[]{
    let questions: any[] = [
      { text: 'How is your overall mood today?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
      { text: 'How well did you sleep last night?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
      { text: 'How would you rate your stress level?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
      { text: 'How satisfied are you with your work or daily activities?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
      { text: 'How often do you engage in activities you enjoy?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
      { text: 'How well are you coping with challenges?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
      { text: 'How would you rate your energy levels today?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
      { text: 'How satisfied are you with your overall health?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
      { text: 'How often do you practice relaxation or mindfulness?', options:[{label:'Excellent',value:4},{label:'Good',value:2},{label:'Average',value:0},{label:'Poor',value:-2}] },
    ];
    return questions;
  }
}
