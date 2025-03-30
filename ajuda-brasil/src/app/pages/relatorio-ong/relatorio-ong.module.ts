import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../core/material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { RelatorioOngComponent } from './relatorio-ong.component';
import { RelatorioOngRoutingModule } from './relatorio-ong-routing.module';

@NgModule({
  declarations: [
    RelatorioOngComponent
    
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RelatorioOngRoutingModule,
    
  ],
  exports: [
    RelatorioOngComponent
  ]
})

export class RelatorioOngModule { 

}
