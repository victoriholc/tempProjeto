import { Component, EventEmitter, Output } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa.component';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {

  ultimoId = 0;
  nome = '';
  // inputNomeValue = '';
  isAdicionado = false;
  @Output() pessoaAdicionada = new EventEmitter();

  adicionar(){
    // const num = Math.round(Math.random() * 100) + 1;
    // this.nomeNovaPessoa = 'Pessoa ' + num;
    // console.log(`Adicionando ${this.nomeNovaPessoa}`);

    // this.nome = this.inputNomeValue;
    this.isAdicionado = true;
    const pessoa : Pessoa = {
      id: ++this.ultimoId,
      nome: this.nome
    };

    this.pessoaAdicionada.emit(pessoa);
  }

}
