import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TagEditService {

  private editstate;

  constructor() { this.editstate = false; }


  public get value(): boolean {
    return this.editstate;
  }


  public set value(v: boolean) {
    this.editstate = v;
  }


}
