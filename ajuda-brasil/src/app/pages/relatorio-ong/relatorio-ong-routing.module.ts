import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelatorioOngComponent } from './relatorio-ong.component';

const routes: Routes = [
  {
    path: '',
    component: RelatorioOngComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatorioOngRoutingModule { }
