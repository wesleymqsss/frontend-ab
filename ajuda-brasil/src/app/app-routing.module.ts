import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RelatorioOngComponent } from './pages/relatorio-ong/relatorio-ong.component';
import { FormOngComponent } from './pages/form-ong/form-ong.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
    {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'relatorio-ong',
    component: RelatorioOngComponent

  },
  {
    path: 'form-ong',
    component: FormOngComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
