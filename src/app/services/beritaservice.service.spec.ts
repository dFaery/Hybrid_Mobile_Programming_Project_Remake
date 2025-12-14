import { TestBed } from '@angular/core/testing';

import { BeritaserviceService } from '../beritaservice.service';

describe('BeritaserviceService', () => {
  let service: BeritaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeritaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
