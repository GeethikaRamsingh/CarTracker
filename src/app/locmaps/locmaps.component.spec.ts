import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocmapsComponent } from './locmaps.component';

describe('LocationComponent', () => {
  let component: LocmapsComponent;
  let fixture: ComponentFixture<LocmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
