import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PessoaService } from './pessoa.service';

import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaCardComponent } from './pessoa-card/pessoa-card.component';
import { PessoaComponent } from './pessoa.component';

// const criarPessoaService = () => {
//   return new PessoaSimplifiedService(2);
//   return new PessoaService(new LogService('ERROR'));
// }

@NgModule({
  declarations: [
    PessoaFormComponent,
    PessoaCardComponent,
    PessoaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PessoaFormComponent,
    PessoaCardComponent
  ],
  providers: [
    // { provide: PessoaService, useFactory: criarPessoaService },
    { provide: PessoaService, useClass: PessoaService },
  ]
})
export class PessoaModule { }
