import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './Pages/pagina-inicial/pagina-inicial.component';
import { PaginaCriacaoAnotacaoComponent } from './Pages/pagina-criacao-anotacao/pagina-criacao-anotacao.component';

const routes: Routes = [
  {path: '', component: PaginaInicialComponent},
  {path: 'nova-anotacao', component: PaginaCriacaoAnotacaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

