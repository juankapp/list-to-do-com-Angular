import { Component } from '@angular/core';
import { Anotacao } from '../../interfaces/anotacao';
import { DadosAnotacaoService } from '../../Service/dados-anotacao.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pagina-criacao-anotacao',
  templateUrl: './pagina-criacao-anotacao.component.html',
  styleUrl: './pagina-criacao-anotacao.component.scss'
})
export class PaginaCriacaoAnotacaoComponent {

  constructor(private Anotacao: DadosAnotacaoService, private router: Router) {}

  TituloAnotacao : string = ""
  TextoModal: string = ""
  ImagemAnotacao: string = ""
  TextoAnotacao: string = ""
  selectedFile: File | null = null;
  base64String: string | null = null;

  FazerValidacao() {
    console.log(this.TituloAnotacao)
    if(!this.TituloAnotacao) {
        this.TextoModal = "O titulo da anotação esta vazia";
        this.abrirModalErro() 
    } else if(!this.TextoAnotacao){
      this.TextoModal = "O texto da anotação esta vazia";
        this.abrirModalErro() 
    } else {
      this.SalvarAnotacao()
    }
  }

  SalvarAnotacao() {
   var objectAnotacao: Anotacao  = {
    Titulo: this.TituloAnotacao,
    Descricao: this.TextoAnotacao,
    Dia: new Date,
    Image: this.base64String
   }

   this.Anotacao.AdicionarAnotacao(objectAnotacao)
   this.router.navigate(['']);

  }

  
  abrirModalErro() {

      const modal = document.getElementById('myModal');
      if(modal != null) {
        modal.style.display = "block";
      }
      
  } 

  fecharModalErro() {
    const modal = document.getElementById('myModal');
      if(modal != null) {
        modal.style.display = "none";
      }
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        this.base64String = e.target?.result as string;
        console.log('Base64:', this.base64String);
        // Faça o que quiser com a string base64
      };

      reader.onerror = (error) => {
        console.error('Erro ao converter para Base64:', error);
      };

      reader.readAsDataURL(this.selectedFile);
    } else {
      console.warn('Nenhum arquivo selecionado.');
    }
  }
  
}
