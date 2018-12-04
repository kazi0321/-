import { Component, OnInit, OnDestroy } from '@angular/core';
import { CodeService } from '../code.service';
import { RunService } from '../run.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  constructor(
    private codeService: CodeService,
    private runService: RunService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  run(): void {
    const sampleCode = this.codeService.toCode();
    this.sub = this.runService.run(sampleCode);
  }

}
