import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTipComponent } from './default-tip.component';

describe('DefaultTipComponent', () => {
  let component: DefaultTipComponent;
  let fixture: ComponentFixture<DefaultTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
