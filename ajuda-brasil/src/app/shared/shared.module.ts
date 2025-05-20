import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MaterialModule } from "../core/material/material.module";
import { HeaderComponent } from './header/header.component';
import { Grafico1Component } from './grafico-1/grafico-1.component';
import { Grafico2Component } from './grafico-2/grafico-2.component';
import { ModalDetalhesComponent } from './modal-detalhes/modal-detalhes.component';
import { FormsModule } from "@angular/forms";
import { DirectivesModule } from "../directives/directives.module";
import { PipesModule } from "../pipes/pipes.module";


@NgModule({
    declarations: [
        HeaderComponent,
        Grafico1Component,
        Grafico2Component,
        ModalDetalhesComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        DirectivesModule,
        PipesModule,
    ],
    exports: [
        HeaderComponent,
        Grafico1Component,
        Grafico2Component,
        ModalDetalhesComponent,
        FormsModule,
        DirectivesModule,
        PipesModule,
    ]
})
export class SharedModule { }
