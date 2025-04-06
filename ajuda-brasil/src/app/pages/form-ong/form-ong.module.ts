import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../core/material/material.module';
import { SharedModule } from '../../shared/shared.module';
import { FormOngComponent } from './form-ong.component';
import { FormOngRoutingModule } from './form-ong-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormOngComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormOngRoutingModule,
    FormsModule
  ],
  exports: [
    FormOngComponent
  ]
})

export class FormOngModule { }
