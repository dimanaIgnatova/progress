import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from '../question';
import { ActivatedRoute, Router } from '@angular/router';
import AnimalsQuestions from '../../assets/AnimalsQuestions.json';
import ArtQuestions from '../../assets/ArtQuestions.json';
import HistoryQuestions from '../../assets/HistoryQuestions.json';
import SportsQuestions from '../../assets/SportsQuestions.json';
import TechnologyQuestions from '../../assets/TechnologyQuestions.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {

  currentQuestion: Question = {
      id: 1,
      question: '',
      correctAnswer: '',
      allAnswers: [],
      usedBefore: false
    };
  
  timeLeft: number = 45;
  interval: any;
  questionType: string = '';
  questionId: string = '';
  selectedAnswer: string = ' ';

  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) {
    this.route.params.subscribe(routeParams => {
      this.questionType = routeParams.type;
		  this.questionId = routeParams.id;
      this.setQuestion(this.questionType, this.questionId);
	  });
  }

  setQuestion(questionType: string | null, questionId: string | null) {
    switch(questionType) {
      case "Animals":
        this.currentQuestion = {
          id: AnimalsQuestions.questionObjects[Number(questionId) - 1].id,
          question: AnimalsQuestions.questionObjects[Number(questionId) - 1].question,
          correctAnswer: AnimalsQuestions.questionObjects[Number(questionId) - 1].correctAnswer,
          allAnswers: AnimalsQuestions.questionObjects[Number(questionId) - 1].allAnswers,
          usedBefore: true
        };
        break;
      case "Art":
        this.currentQuestion = {
          id: ArtQuestions.questionObjects[Number(questionId) - 1].id,
          question: ArtQuestions.questionObjects[Number(questionId) - 1].question,
          correctAnswer: ArtQuestions.questionObjects[Number(questionId) - 1].correctAnswer,
          allAnswers: ArtQuestions.questionObjects[Number(questionId) - 1].allAnswers,
          usedBefore: true
        };
        break;
      case "History":
        this.currentQuestion = {
          id: HistoryQuestions.questionObjects[Number(questionId) - 1].id,
          question: HistoryQuestions.questionObjects[Number(questionId) - 1].question,
          correctAnswer: HistoryQuestions.questionObjects[Number(questionId) - 1].correctAnswer,
          allAnswers: HistoryQuestions.questionObjects[Number(questionId) - 1].allAnswers,
          usedBefore: true
        };
        break;
      case "Sports":
        this.currentQuestion = {
          id: SportsQuestions.questionObjects[Number(questionId) - 1].id,
          question: SportsQuestions.questionObjects[Number(questionId) - 1].question,
          correctAnswer: SportsQuestions.questionObjects[Number(questionId) - 1].correctAnswer,
          allAnswers: SportsQuestions.questionObjects[Number(questionId) - 1].allAnswers,
          usedBefore: true
        };
        break;
      case "Technology":
        this.currentQuestion = {
          id: TechnologyQuestions.questionObjects[Number(questionId) - 1].id,
          question: TechnologyQuestions.questionObjects[Number(questionId) - 1].question,
          correctAnswer: TechnologyQuestions.questionObjects[Number(questionId) - 1].correctAnswer,
          allAnswers: TechnologyQuestions.questionObjects[Number(questionId) - 1].allAnswers,
          usedBefore: true
        };
        break;
    }
    this.shuffleArray(this.currentQuestion.allAnswers);
  }

  ngOnInit() {
    this.timeLeft = 45;
    this.startTimer();
    this.selectedAnswer = ' ';
    
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  nextQuestion() {
    if (this.selectedAnswer.localeCompare(this.currentQuestion.correctAnswer) == 0) {
      this.dataService.result++;
    }
    this.timeLeft = 45;
    this.selectedAnswer = ' ';
    let currentType = this.dataService.allQustionTypes.pop();
    let currentId = this.dataService.allIds.pop();
    if (currentType != null && currentId != null) {
      this.router.navigateByUrl('/question/' + currentType + '/' + currentId);
    }
    else {
      this.router.navigateByUrl('/results');
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else if (this.timeLeft == 0) {
        this.nextQuestion();
      }
    },1000)
  }

  isAnswerCorrect(value : string) {
    if (this.selectedAnswer !== ' ' && value.localeCompare(this.currentQuestion.correctAnswer) == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  shuffleArray(array : string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

}
