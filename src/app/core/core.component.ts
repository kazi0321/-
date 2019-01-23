import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {

  chapterLists=[]
  index
  constructor(
      private DataService: DataService
  ) { }

  ngOnInit(){
    this.chapterLists = this.DataService.list
    this.index = this.DataService.index

  }

}
