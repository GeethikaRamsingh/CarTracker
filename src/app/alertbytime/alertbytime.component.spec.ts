import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerttimeComponent } from './alertbytime.component';

describe('AlertbytimeComponent', () => {
  let component: AlerttimeComponent;
  let fixture: ComponentFixture<AlerttimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlerttimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlerttimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
