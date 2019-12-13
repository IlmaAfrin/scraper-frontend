import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  constructor(public httpClient: HttpClient) {

  }
  public getQuestion(keyword: string, category: string): Observable<any> {
    const url = `http://localhost:3000/api/Scraper/QuestionData?keyword=${keyword}&category=${category}`;
    return this.httpClient.get<any>(url);
  }
  public getQuestionThread(url: string): Observable<any> {
    const uri = `http://localhost:3000/api/Scraper/QuestionThread?url=${url}`;
    return this.httpClient.get<any>(uri);
  }
}
