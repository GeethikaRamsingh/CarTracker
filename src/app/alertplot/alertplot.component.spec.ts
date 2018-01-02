import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertplotComponent } from './alertplot.component';

describe('AlertplotComponent', () => {
  let component: AlertplotComponent;
  let fixture: ComponentFixture<AlertplotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertplotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
