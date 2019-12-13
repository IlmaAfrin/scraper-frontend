import {Action} from '@ngrx/store';
import {QuestionData, QuestionThread} from '../Models/scraper-models';
export const GET_QUESTION_DATA_ACTION = '[Question] GET_QUESTION_DATA_ACTION';
export const GET_QUESTION_DATA_SUCCESS_ACTION = '[Question] GET_QUESTION_DATA_SUCCESS_ACTION';
export const GET_QUESTION_DATA_FAILED_ACTION = '[Question] GET_QUESTION_DATA_FAILED_ACTION';

export const GET_QUESTION_THREAD_ACTION = '[Question] GET_QUESTION_THREAD_ACTION';
export const GET_QUESTION_THREAD_SUCCESS_ACTION = '[Question] GET_QUESTION_THREAD_SUCCESS_ACTION';
export const GET_QUESTION_THREAD_FAILED_ACTION = '[Question] GET_QUESTION_THREAD_FAILED_ACTION';
export const SAVE_CURRENT_QUESTION_DATA = '[Question] SAVE_CURRENT_QUESTION_DATA';

export class GetQuestionDataAction implements Action {
  readonly type = GET_QUESTION_DATA_ACTION;
  constructor(public keyword: string, public category: string) {
    console.log(keyword);
    console.log(category);
  }
}

export class GetQuestionDataSuccessAction implements Action {
  readonly type = GET_QUESTION_DATA_SUCCESS_ACTION;
  constructor(public payload: QuestionData[]) {
    console.log(payload);
  }
}

export class GetQuestionDataFailedAction implements Action {
  readonly type = GET_QUESTION_DATA_FAILED_ACTION;
  constructor(public payload: any) {
    console.log(payload);
  }
}
export class GetQuestionThreadAction implements Action {
  readonly type = GET_QUESTION_THREAD_ACTION;
  constructor(public url: string) {
    console.log(url);
  }
}

export class GetQuestionThreadSuccessAction implements Action {
  readonly type = GET_QUESTION_THREAD_SUCCESS_ACTION;
  constructor(public payload: QuestionThread) {
    console.log(payload);
  }
}

export class GetQuestionThreadFailedAction implements Action {
  readonly type = GET_QUESTION_THREAD_FAILED_ACTION;
  constructor(public payload: any) {
    console.log(payload);
  }
}
export class SaveCurrentQuestionData implements Action {
  readonly type = SAVE_CURRENT_QUESTION_DATA;
  constructor(public payload: any) {
    console.log(payload);
  }
}
export type QuestionAction = GetQuestionDataAction |
  GetQuestionDataSuccessAction |
  GetQuestionDataFailedAction | GetQuestionThreadAction | GetQuestionThreadSuccessAction | GetQuestionThreadFailedAction | SaveCurrentQuestionData;

