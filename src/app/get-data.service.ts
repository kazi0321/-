import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<myData>('http://localhost:3000/quotes')
  }
}

interface myData {
  name: string;
  textfile: string;
}
