import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AliasService {

  aliases = {
    '入力': ''
  };

  constructor() { }
}
