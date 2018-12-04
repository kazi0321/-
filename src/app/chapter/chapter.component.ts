import { Component, OnInit } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DataService} from '../data.service';
import { ArrayDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  log: string;
  chapterLists=[]

  constructor(
      public dialog: MatDialog,
      private DataService: DataService,
  ) { }

  ngOnInit() {
    this.DataService.getChapterData().subscribe(data => {
      this.chapterLists=data.data
    })
  }

  openDetail(i): void {
    const dialogRef = this.dialog.open(DetailComponent, {
      data: this.chapterLists[i]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.log = result;
    });
  }

  icon_view(num){
    var result:string
    
    if (num.slice(-2)<10){
      result=num.slice(-1)
    }else{
      result=num
    }
    return result
  }
}