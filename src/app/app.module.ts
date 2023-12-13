import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './Pages/pagina-inicial/pagina-inicial.component';
import { CabecalhoComponent } from './Component/cabecalho/cabecalho.component';
import { RodapeComponent } from './Component/rodape/rodape.component';
import { MenuAnotacoesComponent } from './Component/menu-anotacoes/menu-anotacoes.component';
import { CardAnotacaoComponent } from './Component/card-anotacao/card-anotacao.component';
import { PaginaCriacaoAnotacaoComponent } from './Pages/pagina-criacao-anotacao/pagina-criacao-anotacao.component';
import { ToastMensagensComponent } from './component/toast-mensagens/toast-mensagens.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    CabecalhoComponent,
    RodapeComponent,
    MenuAnotacoesComponent,
    CardAnotacaoComponent,
    PaginaCriacaoAnotacaoComponent,
    ToastMensagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
