import { TestBed, inject } from '@angular/core/testing';

import { WorksService } from './works.service';

describe('WorksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorksService]
    });
  });

  it('should be created', inject([WorksService], (service: WorksService) => {
    expect(service).toBeTruthy();
  }));
});
