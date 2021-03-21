import { Injectable } from '@angular/core';
import { Question } from './question';
import AnimalsQuestions from '../assets/AnimalsQuestions.json';
import ArtQuestions from '../assets/ArtQuestions.json';
import HistoryQuestions from '../assets/HistoryQuestions.json';
import SportsQuestions from '../assets/SportsQuestions.json';
import TechnologyQuestions from '../assets/TechnologyQuestions.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  animalsQuestions: Question[] = [];
  artQuestions: Question[] = [];
  historyQuestions: Question[] = [];
  sportsQuestions: Question[] = [];
  technologyQuestions: Question[] = [];
  allQustionTypes: string[] = [];
  allIds: number[] = [];
  result: number = 0;
  
  constructor() {
  }

  assignValues() {
    for (let i=0; i<AnimalsQuestions.questionObjects.length; i++) {
      this.animalsQuestions[i] = {
        id: AnimalsQuestions.questionObjects[i].id,
        question: AnimalsQuestions.questionObjects[i].question,
        correctAnswer: AnimalsQuestions.questionObjects[i].correctAnswer,
        allAnswers: AnimalsQuestions.questionObjects[i].allAnswers,
        usedBefore: false
      }
    }

    for (let i=0; i<ArtQuestions.questionObjects.length; i++) {
      this.artQuestions[i] = {
        id: ArtQuestions.questionObjects[i].id,
        question: ArtQuestions.questionObjects[i].question,
        correctAnswer: ArtQuestions.questionObjects[i].correctAnswer,
        allAnswers: ArtQuestions.questionObjects[i].allAnswers,
        usedBefore: false
      }
    }

    for (let i=0; i<HistoryQuestions.questionObjects.length; i++) {
      this.historyQuestions[i] = {
        id: HistoryQuestions.questionObjects[i].id,
        question: HistoryQuestions.questionObjects[i].question,
        correctAnswer: HistoryQuestions.questionObjects[i].correctAnswer,
        allAnswers: HistoryQuestions.questionObjects[i].allAnswers,
        usedBefore: false
      }
    }

    for (let i=0; i<SportsQuestions.questionObjects.length; i++) {
      this.sportsQuestions[i] = {
        id: SportsQuestions.questionObjects[i].id,
        question: SportsQuestions.questionObjects[i].question,
        correctAnswer: SportsQuestions.questionObjects[i].correctAnswer,
        allAnswers: SportsQuestions.questionObjects[i].allAnswers,
        usedBefore: false
      }
    }

    for (let i=0; i<TechnologyQuestions.questionObjects.length; i++) {
      this.technologyQuestions[i] = {
        id: TechnologyQuestions.questionObjects[i].id,
        question: TechnologyQuestions.questionObjects[i].question,
        correctAnswer: TechnologyQuestions.questionObjects[i].correctAnswer,
        allAnswers: TechnologyQuestions.questionObjects[i].allAnswers,
        usedBefore: false
      }
    }
  }

  getRandomIdValue() {
    return Math.floor(Math.random() * 3) + 1;
  }

  generateIds() {
    for (let i=0; i<this.allQustionTypes.length; i++) {
      this.allIds[i] = this.getRandomIdValue();
    }
  }

  assignTypes() {
    this.allQustionTypes = ['Animals', 'Art', 'History', 'Sports', 'Technology'];
  }

}
