import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.componet';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { AdicionarPessoaComponent } from './adicionar-pessoa/adicionar-pessoa.component';
import { FormsModule } from '@angular/forms';
import { PessoaCardComponent } from './pessoa-card/pessoa-card.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { CampoColoridoHostbindingDirective } from './campo-colorido-hostbinding.directive';
import { CampoColoridoHostbindingRandomDirective } from './campo-colorido-hostbinding-random.directive';
import { CampoColoridoInputnameDirective } from './campo-colorido-inputname.directive';
import { CampoColoridoButtonsDirective } from './campo-colorido-buttons.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    PessoaComponent,
    AdicionarPessoaComponent,
    PessoaCardComponent,
    PessoaFormComponent,
    CampoColoridoDirective,
    CampoColoridoHostbindingDirective,
    CampoColoridoHostbindingRandomDirective,
    CampoColoridoInputnameDirective,
    CampoColoridoButtonsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
