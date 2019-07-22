import { TestBed } from '@angular/core/testing';

import { DadoswsService } from './dadosws.service';

describe('DadoswsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadoswsService = TestBed.get(DadoswsService);
    expect(service).toBeTruthy();
  });
});
