import { TestBed } from '@angular/core/testing';

import { DadosAnotacaoService } from './dados-anotacao.service';

describe('DadosAnotacaoService', () => {
  let service: DadosAnotacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosAnotacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
