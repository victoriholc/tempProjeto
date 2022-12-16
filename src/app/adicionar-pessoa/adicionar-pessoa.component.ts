import { Component } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa.component';

@Component({
  selector: 'app-adicionar-pessoa',
  templateUrl: './adicionar-pessoa.component.html',
  styleUrls: ['./adicionar-pessoa.component.css']
})
export class AdicionarPessoaComponent {

  pessoas : Pessoa[] = [];

  aoAdicionar(pessoa: Pessoa) {
    console.log(pessoa);
    
    this.pessoas.push(pessoa)
  }

}
