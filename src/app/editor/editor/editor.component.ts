import { Component, OnInit } from '@angular/core';
import { WordData, LineData } from '../data';
import { Observable } from 'rxjs';
import { CodeService } from '../code.service';
import { ChipsService } from '../../services/chips.service';
import { TagEditService } from '../../services/tag-edit.service';
import { anies } from '../animation/animation';
import {MatIconModule} from '@angular/material/icon';

const INLINE: String = 'inline';
const OUTLINE: String = 'outline';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  animations: anies,
})

export class EditorComponent implements OnInit {
  items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ];
  isDropped = false;
  private dlineState = [INLINE, INLINE, INLINE, INLINE, INLINE, INLINE, INLINE, INLINE, INLINE, INLINE, INLINE];
  private onChips = false;
  private tmp1 = [];
  private tmp2 = [];
  private rotateState = 'a';
  private chipIdx = 0;

  private shiftToggle(i, j) { this.service1.value2[i][j] = this.service1.value2[i][j] === 'aa' ? 'ab' : 'aa'; }
  private dlineToggle(i) { this.dlineState[i] = this.dlineState[i] === INLINE ? 'outline' : INLINE; }

  constructor(private service1: ChipsService, private service2: TagEditService) { }

  ngOnInit() { }


  private dragstartE(event, item) {
    event.dataTransfer.setData('text/plain', item);
    this.service1.tagDrag = true;
  }

  private dragoverE(event) {
    if (this.service1.tagDrag) {
      event.preventDefault();
    }
  }
  private ldragoverE(event) {
    if (this.service1.tagDrag) {
      event.preventDefault();
    }
  }
  private ldragenter(i) {
    this.dlineToggle(i);
    this.chipIdx = this.service1.value[i].length;
  }

  private cdragenterE(event, i, j) {
    /*if (!event.target.classList.contains('anime')) {
      event.target.classList.add('anime');
    }*/
    this.shiftToggle(i, j);
    this.chipIdx = j;
  }
  private cdragleaveE(event) {
    /*if (event.target.classList.contains('anime')) {
      event.target.childNodes.classList.remove('anime');
    }*/
  }

  private dropE(event, i) {
    this.service1.add(event.dataTransfer.getData('text/plain'), i, this.chipIdx);
    this.isDropped = true;
    this.dlineToggle(i);
  }

  private dragendE(i, j) {
    if (this.isDropped) {
      this.service1.searchAndDestroy(i, j);
    }
    this.service1.tagDrag = false;
    this.isDropped = false;
  }

  public searchAndDestroy(i, j) {
    this.service1.searchAndDestroy(i, j);
  }

  private ldragleaveE(event, i) {
    this.dlineToggle(i);
  }

  private dragenterE3() {
    // this.onChips = true;
    this.rotateState = this.rotateState === 'a' ? 'b' : 'a';
  }
  private dragleaveE3() {
    this.onChips = false;
  }

  private rotateDone() {
    this.rotateState = this.rotateState === 'a' ? 'b' : 'a';
  }

  private dragenterE4(i) {
    // this.chipIdx = this.service1.value[i].length;
  }

  private done1(j) {
    this.chipIdx = j;
  }
  test(i,j){
    // console.log(e)
    this.service1.value[i][j] = this.service1.value[i][j] + window.prompt("文字を入力してください");""
  }
}
