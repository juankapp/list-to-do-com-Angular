import { Component } from '@angular/core';
import { Anotacao } from '../../interfaces/anotacao';
import { DadosAnotacaoService } from '../../Service/dados-anotacao.service';


@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.scss'
})
export class PaginaInicialComponent {
  Anotacoes: Array<Anotacao> = []
  
  constructor(public anotacoes: DadosAnotacaoService) {
    this.Anotacoes = anotacoes.ExibirAnotacoes()

  }
  
}
