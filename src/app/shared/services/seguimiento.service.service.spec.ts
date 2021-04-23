import { TestBed } from '@angular/core/testing';

import { Seguimiento.ServiceService } from './seguimiento.service.service';

describe('Seguimiento.ServiceService', () => {
  let service: Seguimiento.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seguimiento.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
