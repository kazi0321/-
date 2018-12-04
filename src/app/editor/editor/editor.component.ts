import { Component, OnInit } from '@angular/core';
import { WordData, LineData } from '../data';
import { Observable } from 'rxjs';
import { CodeService } from '../code.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private codeService: CodeService) { }

  ngOnInit() {
  }

  public get text(): string[][] {
    return this.codeService.text;
  }

  public get indexWidth(): Observable<number> {
    return this.codeService.indexWidthObservable;
  }

  newLine(data: WordData): void {
    const index: number = data.index + 1;
    this.codeService.text.splice(index, 0, []);
    if (data.str) {
      this.codeService.text[index].push(data.str);
    }
    this.codeService.widthUpdate();
  }

  lineConcat(line: LineData): void {
    if (line.index > 0) {
      const index: number = line.index - 1;
      line.str.filter(str => str.length > 0).forEach(str => this.text[index].push(str));
      this.text.splice(line.index, 1);
    }
  }

}
