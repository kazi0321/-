import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface isLoggedIn {
  status: boolean,
  username:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('/api/isloggedin.php')
  }
}
