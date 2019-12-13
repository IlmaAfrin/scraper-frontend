import {
  QuestionAction,
  GET_QUESTION_DATA_SUCCESS_ACTION,
  GET_QUESTION_THREAD_SUCCESS_ACTION,
  SAVE_CURRENT_QUESTION_DATA
} from './question.action';
import {QuestionData, QuestionThread} from '../Models/scraper-models';

export interface IQuestionState {
  questionDataList: QuestionData[];
  questionThread: QuestionThread;
  currentQuestionData: QuestionData;
}

export const initialQuestionState: IQuestionState = {
  questionDataList: [],
  questionThread: null,
  currentQuestionData: null
};

export const questionReducer = (state = initialQuestionState, action: QuestionAction): IQuestionState => {
  switch (action.type) {
    case GET_QUESTION_DATA_SUCCESS_ACTION:
       return {
         ...state,
         questionDataList: action.payload
       };
    case GET_QUESTION_THREAD_SUCCESS_ACTION:
      return {
        ...state,
        questionThread: action.payload
      };
      case SAVE_CURRENT_QUESTION_DATA:
      return {
        ...state,
        currentQuestionData: action.payload
      };
  }
};
