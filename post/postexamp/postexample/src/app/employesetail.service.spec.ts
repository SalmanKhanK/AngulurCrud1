import { TestBed } from '@angular/core/testing';

import { EmployesetailService } from './employesetail.service';

describe('EmployesetailService', () => {
  let service: EmployesetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployesetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
