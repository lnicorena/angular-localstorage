import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaGetComponent } from './pessoa-get/pessoa-get.component';
import { PessoaSaveComponent } from './pessoa-save/pessoa-save.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaGetComponent
  },
  {
    path: 'pessoas',
    component: PessoaGetComponent
  },
  {
    path: 'pessoa/novo',
    component: PessoaSaveComponent
  },
  {
    path: 'pessoa/edit/:id',
    component: PessoaSaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
