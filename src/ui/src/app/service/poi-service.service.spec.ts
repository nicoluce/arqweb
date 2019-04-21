import { TestBed } from '@angular/core/testing';

import { PoiServiceService } from './poi-service.service';

describe('PoiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoiServiceService = TestBed.get(PoiServiceService);
    expect(service).toBeTruthy();
  });
});
