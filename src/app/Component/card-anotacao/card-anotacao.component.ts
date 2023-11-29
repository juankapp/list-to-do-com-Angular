import { Component, Input } from '@angular/core';
import { Anotacao } from '../../interfaces/anotacao';

@Component({
  selector: 'app-card-anotacao',
  templateUrl: './card-anotacao.component.html',
  styleUrl: './card-anotacao.component.scss'
})
export class CardAnotacaoComponent {

  @Input() anotacao!: Anotacao
}
