import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTipComponent } from './user-tip.component';

describe('UserTipComponent', () => {
  let component: UserTipComponent;
  let fixture: ComponentFixture<UserTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
