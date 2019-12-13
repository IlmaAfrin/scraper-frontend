import { Effect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
// tslint:disable-next-line: max-line-length
import {
  GET_QUESTION_DATA_ACTION,
  GetQuestionDataAction,
  GetQuestionDataSuccessAction,
  GetQuestionDataFailedAction,
  GET_QUESTION_THREAD_ACTION, GetQuestionThreadAction, GetQuestionThreadSuccessAction, GetQuestionThreadFailedAction
} from './question.action';
import { QuestionService } from '../services/question.service';
import { map, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class QuestionEffect {
  constructor(public actions$: Actions, public questionService: QuestionService) {

}
  @Effect()
  public getQuestion$ = this.actions$.pipe(
    ofType(GET_QUESTION_DATA_ACTION),
    switchMap ((action: GetQuestionDataAction) =>
      this.questionService.getQuestion(action.keyword, action.category).pipe(
        map((payload: any) => {
          return new GetQuestionDataSuccessAction(payload);
        }),
        catchError((error) => {
          return of(new GetQuestionDataFailedAction(error));
        })
      )
    )
  );

  @Effect()
  public getQuestionThread$ = this.actions$.pipe(
    ofType(GET_QUESTION_THREAD_ACTION),
    switchMap ((action: GetQuestionThreadAction) =>
      this.questionService.getQuestionThread(action.url).pipe(
        map((payload: any) => {
          return new GetQuestionThreadSuccessAction(payload);
        }),
        catchError((error) => {
          return of(new GetQuestionThreadFailedAction(error));
        })
      )
    )
  );
}
