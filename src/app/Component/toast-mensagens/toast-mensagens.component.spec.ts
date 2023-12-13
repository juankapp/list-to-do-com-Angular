import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMensagensComponent } from './toast-mensagens.component';

describe('ToastMensagensComponent', () => {
  let component: ToastMensagensComponent;
  let fixture: ComponentFixture<ToastMensagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToastMensagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToastMensagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
