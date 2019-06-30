import { TestBed } from '@angular/core/testing';

import { BuisnessOwnerService } from './buisness-owner.service';

describe('BuisnessOwnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuisnessOwnerService = TestBed.get(BuisnessOwnerService);
    expect(service).toBeTruthy();
  });
});
