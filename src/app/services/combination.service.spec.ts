import { TestBed, inject } from '@angular/core/testing';

import { CombinationService } from './combination.service';

describe('CombinationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombinationService]
    });
  });

  it('should be created', inject([CombinationService], (service: CombinationService) => {
    expect(service).toBeTruthy();
  }));
});
