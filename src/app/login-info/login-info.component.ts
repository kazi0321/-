import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { LoginService } from '../login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-info',
  templateUrl: './login-info.component.html',
  styleUrls: ['./login-info.component.css']
})

export class LoginInfoComponent implements OnInit {
  user: string;
  menuLists=[]


  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.user = "Guest"
    this.menuLists = []

    this.loginService.isLoggedIn().subscribe(data => {
      this.user = data.username
      if (this.user == "Guest") {

        this.menuLists = [
        //new menuList('url','menutitle'),
          new menuList('http://127.0.0.1/user/login', 'ログイン')
        ]
  
      } else {
  
        this.menuLists = [
        //new menuList('url','menutitle'),
          new menuList('http://127.0.0.1/user/logout', 'ログアウト'),
          new menuList('http://127.0.0.1/user/control','設定')
        ]
      }
    })
  }
}

export class menuList {
  constructor(
    public url:string,
    public title:string){}
}
