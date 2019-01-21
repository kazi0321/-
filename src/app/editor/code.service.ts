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
  private returnCodeArray: string[] = []
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

  public toCode(chips): any {
    this.returnCodeArray= []
    chips.forEach(element => {
      var line:string=""
      element.forEach(chip => {
        line += this.parseCode(chip)
      });
      this.returnCodeArray.push(line)
    });
    console.log(this.returnCodeArray)
    return {
      python: this.returnCodeArray
    };
  }


  parseCode(chip) {
    var rString
    if(chip.match(/^表示:.*/)){
      rString = "print(\"" + chip.slice(chip.indexOf(":")+1) + "\")"
    }else if(chip.match(/^繰り返し:.*/)){
      rString="for i in range("+chip.slice(chip.indexOf(":")+1)+"):"
    }else if(chip.match(/^条件:.*/)){
      rString="if True=True:"
    }
    return rString
  }

  constructor() { }
}
