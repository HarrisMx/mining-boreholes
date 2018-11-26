import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoreholesComponent } from './boreholes.component';

describe('BoreholesComponent', () => {
  let component: BoreholesComponent;
  let fixture: ComponentFixture<BoreholesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoreholesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoreholesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
