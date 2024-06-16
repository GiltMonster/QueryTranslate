import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(
    private http: HttpClient
  ) { }

  getQuestions() {
    return this.http.get<any>(environment.apiUrl);
  }

  sendQuestions(data: string) {
    return this.http.post<any>(`${environment.apiUrl}question`, { question: data});
  }
}
