import { Component, OnInit } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
