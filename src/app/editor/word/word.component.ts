import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output, AfterViewChecked } from '@angular/core';
import { WordData } from '../data';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit, AfterViewChecked {
  @Input() word: string;
  @Input() index: number;
  private _state = true;
  @ViewChild('input') private input: ElementRef;
  @Output() none: EventEmitter<number> = new EventEmitter();
  @Output() backspace: EventEmitter<WordData> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    if (this.input) {
      this.input.nativeElement.focus();
    }
  }

  public get state(): boolean {
    return this._state;
  }

  onClick(): void {
    this._state = false;
  }

  onBlur(input: HTMLInputElement): void {
    if (!input.value) {
      this.none.emit(this.index);
    }
    this._state = true;
  }

  onbackspace(input: HTMLInputElement): void {
    if (input.selectionStart === 0) {
      const value: string = input.value;
      this.backspace.emit({ index: this.index, str: value });
    }
  }

}
