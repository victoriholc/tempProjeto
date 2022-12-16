import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.componet';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { AdicionarPessoaComponent } from './adicionar-pessoa/adicionar-pessoa.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { CampoColoridoHostbindingDirective } from './campo-colorido-hostbinding.directive';
import { CampoColoridoHostbindingRandomDirective } from './campo-colorido-hostbinding-random.directive';
import { CampoColoridoInputnameDirective } from './campo-colorido-inputname.directive';
import { CampoColoridoButtonsDirective } from './campo-colorido-buttons.directive';
import { LogService } from './log.service';
import { PessoaModule } from './pessoa/pessoa.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    AdicionarPessoaComponent,
    CampoColoridoDirective,
    CampoColoridoHostbindingDirective,
    CampoColoridoHostbindingRandomDirective,
    CampoColoridoInputnameDirective,
    CampoColoridoButtonsDirective
  ],
  imports: [
    BrowserModule,
    PessoaModule
  ],
  providers: [
    LogService,
    { provide: 'LogServicePrefixo', useValue: 'LOG'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
