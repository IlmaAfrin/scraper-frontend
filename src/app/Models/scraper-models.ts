import { Key } from 'protractor';

export class QuestionData {
        question: string;
        link: string;
}

export class QuestionThread {
  questionDetail: QuestionDetail;
  questionAnswers: QuestionAnswer[];
}
export class QuestionAnswer {
  date: Date;
  votes: number;
  answer: string;
}

export class QuestionDetail {
  date: Date;
  votes: number;
  question: string;
}
