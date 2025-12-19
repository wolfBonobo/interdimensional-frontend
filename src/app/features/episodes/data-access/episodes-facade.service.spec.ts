import { TestBed } from '@angular/core/testing';

import { EpisodesFacade } from './episodes-facade.service';

describe('EpisodesFacadeService', () => {
  let service: EpisodesFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpisodesFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
