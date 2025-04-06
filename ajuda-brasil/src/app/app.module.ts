import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { MaterialModule } from './core/material/material.module';
import { RelatorioOngModule } from './pages/relatorio-ong/relatorio-ong.module';
import { provideHttpClient } from '@angular/common/http';
import { FormOngComponent } from './pages/form-ong/form-ong.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    HomeModule,
    RelatorioOngModule,

  ],
  providers: [
    provideAnimationsAsync(), provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
