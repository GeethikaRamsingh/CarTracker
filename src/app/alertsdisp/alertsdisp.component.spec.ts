import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsdispComponent } from './alertsdisp.component';

describe('AlertsdispComponent', () => {
  let component: AlertsdispComponent;
  let fixture: ComponentFixture<AlertsdispComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertsdispComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsdispComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
