import { TestBed, inject } from '@angular/core/testing';

import { VechileService } from './vechile.service';

describe('VechileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VechileService]
    });
  });

  it('should be created', inject([VechileService], (service: VechileService) => {
    expect(service).toBeTruthy();
  }));
});
