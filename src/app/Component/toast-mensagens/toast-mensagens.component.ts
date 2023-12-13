import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toast-mensagens',
  templateUrl: './toast-mensagens.component.html',
  styleUrl: './toast-mensagens.component.scss'
})
export class ToastMensagensComponent {

  @Output() FecharModal = new EventEmitter()
  @Input() TextoModal!: string

  fecharModal() {
    this.FecharModal.emit()
  }
}
