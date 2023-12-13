import { Injectable } from '@angular/core';
import { Anotacao } from '../interfaces/anotacao';

@Injectable({
  providedIn: 'root'
})
export class DadosAnotacaoService {

  constructor() { }

  anotacao: Anotacao[] = 
  [{ Titulo: "juan", Descricao: '19', Dia: new Date, Image: ''}, 
  {Titulo: "Lorem ipsum dolor sit amet. Eos eius beatae in maiores magni et molestiae quia", 
  Descricao: 'Lorem ipsum dolor sit amet. Eos eius beatae in maiores magni et molestiae quia', 
  Image: '',
  Dia: new Date}
]

  AdicionarAnotacao(Anotacao: Anotacao) {
    this.anotacao.push(Anotacao)
  }

  ExcluirAnotacao(anotacaoParaExcluir: Anotacao) {
    const index = this.anotacao.findIndex(obj => obj.Descricao == anotacaoParaExcluir.Descricao);
    this.anotacao.splice(index, 1)
  }

  ExibirAnotacoes(): any[] {
    return this.anotacao;
  }


}
