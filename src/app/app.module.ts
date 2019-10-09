import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Crud components
import { PessoaSaveComponent } from './pessoa-save/pessoa-save.component';
import { PessoaGetComponent } from './pessoa-get/pessoa-get.component';

// Service to handle the data storage
import { PessoasService } from './pessoas.service';

// Service to access the info about vehicles
import { VeiculosService } from './veiculos.service';

// Loading bar
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

// Form Validation
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

// Http module 
import { HttpClientModule } from '@angular/common/http'; 

export let options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    AppComponent,
    PessoaGetComponent,
    PessoaSaveComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SlimLoadingBarModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    NgxMaskModule.forRoot(options),
    HttpClientModule
  ],
  providers: [
    PessoasService, 
    VeiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
