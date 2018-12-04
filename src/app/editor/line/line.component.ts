import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { LineData, WordData } from '../data';
import { Observable, from } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit, AfterViewInit {
  @Input() line: string[];
  @Input() index: number;
  @Input() indexWidth: Observable<number>;
  @Output() enter: EventEmitter<WordData> = new EventEmitter();
  @Output() prevLine: EventEmitter<LineData> = new EventEmitter();
  @ViewChild('input') input: ElementRef;


  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (this.input) {
      this.input.nativeElement.focus();
    }
  }

  public get indents(): number {
    return 10;
  }

  add(input: HTMLInputElement): void {
    const value: string = input.value.trim();
    input.value = '';
    if (value) {
      this.line.push(value);
    }
  }

  remove(index: number): void {
    this.line.splice(index, 1);
  }

  newLine(input: HTMLInputElement): void {
    const value: string = input.value.trim();
    input.value = '';
    const data: WordData = { index: this.index, str: value };
    this.enter.emit(data);
  }

  onclick(): void {
    this.input.nativeElement.focus();
  }

  backLine(input: HTMLInputElement): void {
    const suffix: string = input.value;
    if (input.selectionStart === 0) {
      if (this.line.length > 0) {
        const prefix: string = this.line.pop();
        input.value = `${prefix}${suffix}`;
      } else {
        this.prevLine.emit({ index: this.index, str: [suffix]});
      }
    }
  }

  backWord(worddata: WordData): void {
    if (worddata.index > 0) {

    } else {
      const addData: string[] = [];
      const skipAmount: number = worddata.index + 1;
      addData.push(worddata.str);
      from(this.line).pipe(skip(skipAmount)).subscribe(addData.push).unsubscribe();
      this.prevLine.emit({ index: this.index, str: addData });
    }
  }

}
