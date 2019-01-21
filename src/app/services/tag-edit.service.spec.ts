import { TestBed, inject } from '@angular/core/testing';

import { TagEditService } from './tag-edit.service';

describe('TagEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TagEditService]
    });
  });

  it('should be created', inject([TagEditService], (service: TagEditService) => {
    expect(service).toBeTruthy();
  }));
});
