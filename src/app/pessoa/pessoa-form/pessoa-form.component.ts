import { Component, EventEmitter, Output } from '@angular/core';
import { LogService } from '../../log.service';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa.component';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent {

  // ultimoId = 0;
  // nome = '';
  // inputNomeValue = '';
  // isAdicionado = false;
  // @Output() pessoaAdicionada = new EventEmitter();

  constructor(
    private pessoaService: PessoaService,
    private logService: LogService
  ){}

  adicionar(nome: string){
    // const num = Math.round(Math.random() * 100) + 1;
    // this.nomeNovaPessoa = 'Pessoa ' + num;
    // console.log(`Adicionando ${this.nomeNovaPessoa}`);

    // this.nome = this.inputNomeValue;
    // this.isAdicionado = true;
    // const pessoa : Pessoa = {
    //   id: ++this.ultimoId,
    //   nome: this.nome
    // };

    // this.pessoaAdicionada.emit(pessoa);

    this.logService.log(`Adicionando ${nome}`)
    this.pessoaService.adicionar(nome);
  }

}
