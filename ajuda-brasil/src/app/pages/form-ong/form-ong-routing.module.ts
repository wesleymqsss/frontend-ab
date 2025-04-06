import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormOngComponent } from './form-ong.component';

const routes: Routes = [
  {
    path: 'form-ong',
    component: FormOngComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormOngRoutingModule { }
