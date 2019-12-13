import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {QuestionData} from '../../Models/scraper-models';
import {Store} from '@ngrx/store';
import {IQuestionState} from '../../store/question.reducer';
import {GetQuestionDataAction, GetQuestionThreadAction, SaveCurrentQuestionData} from '../../store/question.action';
import {getQuestionData} from '../../store/quesion.selector';
import {MatTabChangeEvent} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  OuestionDataList$ : Observable<QuestionData[]> = new Observable<QuestionData[]>();
  matTabs = ['Newest', 'Votes'];
  searchKeyword = 'android';
  selectedIndex = 0;
  constructor(public store: Store<IQuestionState>, public router: Router) { }

  ngOnInit() {
    this.store.dispatch(new GetQuestionDataAction(this.searchKeyword, this.matTabs[this.selectedIndex]));
    this.OuestionDataList$ = this.store.select(getQuestionData);
  }
  tabChanged(event: MatTabChangeEvent) {
    this.selectedIndex = event.index;
    this.store.dispatch(new GetQuestionDataAction(this.searchKeyword, this.matTabs[this.selectedIndex]));
  }
  onClick(data: QuestionData) {
    this.store.dispatch(new GetQuestionThreadAction(data.link));
    this.store.dispatch(new SaveCurrentQuestionData(data));
    this.router.navigateByUrl(`question`);
  }
}
