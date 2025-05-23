import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { RelatorioOngModule } from './pages/relatorio-ong/relatorio-ong.module';
import { provideHttpClient } from '@angular/common/http';
import { FormOngModule } from './pages/form-ong/form-ong.module';
import { ErrorStateMatcher } from '@angular/material/core';
import { CustomErrorStateMatcher } from './utils/custom-error-state-matcher';
import { LoginModule } from './pages/login/login.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    RelatorioOngModule,
    FormOngModule,
  
    CommonModule,
    LoginModule, 
    
  ],
  providers: [
    provideAnimationsAsync(), provideHttpClient(),
    {
      provide: ErrorStateMatcher,
      useClass: CustomErrorStateMatcher
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
