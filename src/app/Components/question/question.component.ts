import { Component, OnInit } from '@angular/core';
import { initialQuestionState, IQuestionState } from 'src/app/store/question.reducer';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import {QuestionData, QuestionThread} from '../../Models/scraper-models';
import {getCurrentQuestionData, getQuestionThread} from '../../store/quesion.selector';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  OuestionThread$: Observable<QuestionThread> = new Observable<QuestionThread>();
  questionData$ : Observable<QuestionData> = new Observable<QuestionData>();
  constructor(public store: Store<IQuestionState>, public route: ActivatedRoute) { }

  ngOnInit() {
    this.OuestionThread$ = this.store.select(getQuestionThread);
    this.questionData$ = this.store.select(getCurrentQuestionData);
  }

}
