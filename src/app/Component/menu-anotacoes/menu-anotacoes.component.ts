import { Component, Input } from '@angular/core';
import { Anotacao } from '../../interfaces/anotacao';

@Component({
  selector: 'app-menu-anotacoes',
  templateUrl: './menu-anotacoes.component.html',
  styleUrl: './menu-anotacoes.component.scss'
})
export class MenuAnotacoesComponent {

  @Input() Anotacoes!: Anotacao[]
 

}
