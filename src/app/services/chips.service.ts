import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChipsService {

  private chips: string[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
  private tmpChips: string[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
  private chipsState: string[][] = [[], [], [], [], [], [], [], [], [], [], [], []];
  private isTagDrag = false;

  constructor() { }

  add(str: string, i: number, j: number) {
    this.chips[i].splice(j, 0, str);
    this.chipsState[i].splice(j, 0, 'aa');
  }

  clear() {
    this.chips.forEach(element => element.length = 0);
  }

  searchAndDestroy(i, j) {
    this.chips[i].splice(j, 1);
  }


  public get value(): string[][] {
    return this.chips;
  }
  public get value2(): string[][] {
    return this.chipsState;
  }

  public get value3(): string[][] {
    return this.tmpChips;
  }


  public get tagDrag(): boolean {
    return this.isTagDrag;
  }

  public set tagDrag(v: boolean) {
    this.isTagDrag = v;
  }

}
