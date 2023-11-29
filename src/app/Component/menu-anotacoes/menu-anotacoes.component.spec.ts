import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAnotacoesComponent } from './menu-anotacoes.component';

describe('MenuAnotacoesComponent', () => {
  let component: MenuAnotacoesComponent;
  let fixture: ComponentFixture<MenuAnotacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuAnotacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuAnotacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
