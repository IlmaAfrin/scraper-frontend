import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IQuestionState } from './question.reducer';

export const getQuestionState = createFeatureSelector('question');
export const getQuestionData = createSelector(
  getQuestionState,
  (state: IQuestionState) => {
    return state ? state.questionDataList : [];
  }
);

export const getQuestionThread = createSelector(
  getQuestionState,
  (state: IQuestionState) => {
    return state ? state.questionThread : null;
  }
);
export const getCurrentQuestionData = createSelector(
  getQuestionState,
  (state: IQuestionState) => {
    return state ? state.currentQuestionData : null;
  }
);
