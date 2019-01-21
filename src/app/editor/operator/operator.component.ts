import { Component, OnInit, OnDestroy,Output,EventEmitter} from '@angular/core';
import { CodeService } from '../code.service';
import { RunService } from '../run.service';
import { Subscription } from 'rxjs';
import { ChipsService } from '../../services/chips.service';
import { TagEditService } from '../../services/tag-edit.service';
import { DACT, ACT, StoryService } from '../../services/story.service';
import { anies } from '../animation/animation';
import { OutputComponent } from '../../output/output.component'

const START = '開始';
const END = '終了';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css'],
  animations: anies
})
export class OperatorComponent implements OnInit, OnDestroy {
  @Output() voted = new EventEmitter<boolean>();
  private chips ;
  private sub: Subscription;
  private next = false;
  storyState = START;
  exebt = this.ss.sigh();
  fnibt = this.ss.sigh();
  edibt = this.ss.sigh();
  private a;
  constructor(
    private codeService: CodeService,
    private runService: RunService,
    private service: ChipsService,
    private service2: TagEditService, 
    private ss: StoryService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  run(): void {
    this.chips = this.service.value;
    const sampleCode = this.codeService.toCode(this.chips);
    this.sub = this.runService.run(sampleCode);
  }

  edit() {
    for (let i = 0; i < this.service.value2.length; i++) {
      for (let j = 0; j < this.service.value2[i].length; j++) {
        this.service.value2[i][j] = 'aa';
      }
    }
    this.service2.value = !this.service2.value;
  }

  clear() {
    this.service.clear();
  }

  storyStart() {
    this.storyState = this.storyState === START ? END : START;
    this.ss.modalToggle();
    this.next = !this.next;
  }

  nextSection() { this.ss.next(); }

}
