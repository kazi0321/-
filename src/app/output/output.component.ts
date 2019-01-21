import { Component, OnInit, Testability, OnDestroy,Output,EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDataService } from '../get-data.service';
import { RunService } from '../editor/run.service';
import { Subscription, Observable, of } from 'rxjs';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnDestroy {
  @Output() voted = new EventEmitter<boolean>();
  outputs: string[] = [];
  private _sub: Subscription;
  private _sub2: Subscription;
  private _progress: Observable<boolean> = of<boolean>(false);

  constructor(private runService: RunService) { }

  ngOnInit() {
    this._sub = this.runService.result.subscribe(str => {
      this.outputs.push(str)
    });
    this._sub2 = this.runService.progress.subscribe(bool => {
      if(bool==true){
        this.clearOutputs()
      }
    });
  }
  clearOutputs(){
    this.outputs=[];
  }

  ngOnDestroy() {
    this._sub.unsubscribe();
  }

  get progress(): Observable<boolean> {
    return this._progress;
  }
}

