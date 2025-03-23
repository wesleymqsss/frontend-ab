import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../core/material/material.module";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { Grafico1Component } from './grafico-1/grafico-1.component';
import { Grafico2Component } from './grafico-2/grafico-2.component';

@NgModule({
    declarations: [
        HeaderComponent,
        Grafico1Component,
        Grafico2Component,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule,

    ],
    exports: [
        HeaderComponent,
        Grafico1Component,
        Grafico2Component,
    ]
})
export class SharedModule { }