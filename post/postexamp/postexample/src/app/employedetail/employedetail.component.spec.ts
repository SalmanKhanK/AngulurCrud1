import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployedetailComponent } from './employedetail.component';

describe('EmployedetailComponent', () => {
  let component: EmployedetailComponent;
  let fixture: ComponentFixture<EmployedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
