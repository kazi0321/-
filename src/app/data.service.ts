import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface myChapterData {
  data: [{
    chapterID: string,
    title: string,
    description: string,
    question: string,
    answer: string

  }]
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  index = 0
  list = []

  constructor(private http: HttpClient) { }

  getChapterData() {
    return this.http.post<myChapterData>('/api/database.php', {
      request: 'chapter'
    })
  }
}
