import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa/pessoa.service';
import { Pessoa } from '../pessoa/pessoa.component';

@Component({
  selector: 'app-adicionar-pessoa',
  templateUrl: './adicionar-pessoa.component.html',
  styleUrls: ['./adicionar-pessoa.component.css']
})
export class AdicionarPessoaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService){}

  // aoAdicionar(pessoa: Pessoa) {
  //   console.log(pessoa);
    
  //   this.pessoas.push(pessoa)
  // }

  ngOnInit(): void {
    this.pessoas = this.pessoaService.consultar();
  }
}
