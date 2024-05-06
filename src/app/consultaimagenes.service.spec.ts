import { TestBed } from '@angular/core/testing';

import { ConsultaimagenesService } from './consultaimagenes.service';

describe('ConsultaimagenesService', () => {
  let service: ConsultaimagenesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaimagenesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
