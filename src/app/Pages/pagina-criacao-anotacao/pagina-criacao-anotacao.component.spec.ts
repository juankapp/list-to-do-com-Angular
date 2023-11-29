import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaCriacaoAnotacaoComponent } from './pagina-criacao-anotacao.component';

describe('PaginaCriacaoAnotacaoComponent', () => {
  let component: PaginaCriacaoAnotacaoComponent;
  let fixture: ComponentFixture<PaginaCriacaoAnotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginaCriacaoAnotacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaginaCriacaoAnotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
