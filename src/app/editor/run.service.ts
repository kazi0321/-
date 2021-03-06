import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of, Subject, Subscription, BehaviorSubject } from 'rxjs';

interface Res {
  answer: string[];
}

@Injectable({
  providedIn: 'root'
})
export class RunService {

  private _resSubject: Subject<string> = new Subject();
  private _progress: Subject<boolean> = new BehaviorSubject(false);
  constructor(private http: HttpClient) { }

  url = 'http://172.20.145.222:8080';

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Content-Length': '500'
    })
  };


  run(code): Subscription {
    this._progress.next(true);
    return this.http.post<Res>(this.url, code, this.options).subscribe(res => {
      const aaa: Res = {answer: ['hellow']};
      console.log(res.answer);
      res.answer.forEach(str => this._resSubject.next(str));
      this._progress.next(false);
    });
  }

  get result(): Observable<string> {
    return this._resSubject.asObservable();
  }

  get progress(): Observable<boolean> {
    return this._progress.asObservable();
  }
}
