import { Component, Input } from '@angular/core';
import { Anotacao } from '../../interfaces/anotacao';
import { DadosAnotacaoService } from '../../Service/dados-anotacao.service';

@Component({
  selector: 'app-card-anotacao',
  templateUrl: './card-anotacao.component.html',
  styleUrl: './card-anotacao.component.scss'
})
export class CardAnotacaoComponent {

  constructor(private Anotacao: DadosAnotacaoService) {

  }

  ExcluirAnotacao(anotacao: Anotacao) {
    this.Anotacao.ExcluirAnotacao(anotacao)
  }

  @Input() anotacao!: Anotacao
}
