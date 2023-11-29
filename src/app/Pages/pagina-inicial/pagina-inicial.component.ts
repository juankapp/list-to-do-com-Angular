import { Component } from '@angular/core';
import { Anotacao } from '../../interfaces/anotacao';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.scss'
})
export class PaginaInicialComponent {
  Anotacoes: Array<Anotacao> = 
  [{ Titulo: "juan", Descricao: '19', Dia: new Date}, 
  {Titulo: "Lorem ipsum dolor sit amet. Eos eius beatae in maiores magni et molestiae quia", Descricao: 'Lorem ipsum dolor sit amet. Eos eius beatae in maiores magni et molestiae quia', Dia: new Date}
]
}
