import { TestBed } from '@angular/core/testing';

import { CharactersFacade } from './characters-facade.service';

describe('CharactersFacadeService', () => {
  let service: CharactersFacade;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersFacade);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
