import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RelatorioOngComponent } from './pages/relatorio-ong/relatorio-ong.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'relatorio-ong',
    component: RelatorioOngComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
