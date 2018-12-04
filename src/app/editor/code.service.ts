import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeService {

  private _text: string[][] = [
    ['def', 'hellow_world:'],
    ['  ', 'print("hello world")'],
    ['あいうえお'],
    ['123456'],
    ['abcdefg'],
  ];

  private _indexWidthSubject: Subject<number> = new Subject();
  private _indexWidthObservable: Observable<number> = this._indexWidthSubject.asObservable();

  public get text(): string[][] {
    return this._text;
  }

  public get indexWidthSubject(): Subject<number> {
    return this._indexWidthSubject;
  }

  public get indexWidthObservable(): Observable<number> {
    return this._indexWidthObservable;
  }

  public widthUpdate() {
    const digit = String(this._text.length).length;
    this._indexWidthSubject.next(digit * 10);
  }

  public toCode(): any {
    return {
      code: [
        ['def printStack():\n'],
        ['    for str in ["abc", "def", "ghi"]:\n'],
        ['        print(str)']
      ]
    };
  }

  constructor() { }
}
