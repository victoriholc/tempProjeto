import { Component, Input } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa.component';

@Component({
  selector: 'app-pessoa-card',
  templateUrl: './pessoa-card.component.html',
  // styleUrls: ['./pessoa-card.component.css']
  styles: [`
    .card-body{
      text-transform: uppercase;
      color: #ffc107;
    }
  `]
})
export class PessoaCardComponent {

  @Input() pessoa : Pessoa = {id: 0, nome: ''};

  getStylesCard(){
    return {
      'border-width.px': this.pessoa.id * 2,
      'background-color': this.pessoa.id % 2 == 0 ? 'lightblue' : 'lightgreen'
    };
  }

  //getClassesCss(){
  //   return[
  //     'badge', 'text-bg-danger'
  //   ];
  // }
  isAdmin(){
    return this.pessoa.nome.startsWith('ADM');
  }
}
