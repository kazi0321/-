import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {

  itemList = [ '表示:', '繰り返し:', '条件:', '=', '和', '差', '積', '商', '剰余' ];

  constructor() { }
}
