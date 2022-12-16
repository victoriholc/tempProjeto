import { Injectable } from "@angular/core";
import { LogService } from "../log.service";
import { Pessoa } from "./pessoa.component";

@Injectable()
export class PessoaService{

    lastId = 0;
    pessoas: Pessoa[] = [{id: 0, nome: 'João'}]

    constructor(private logService: LogService){}

    adicionar(nome: string): void {
        this.logService.log(`Adicionando nome ${nome}`)

        const pessoa: Pessoa = {
            id: ++this.lastId,
            nome: nome
        };

        this.pessoas.push(pessoa);

        console.log(JSON.stringify(this.pessoas))
    }

    consultar(): Pessoa[] {
        console.log('dsaadsdsa')
        return this.pessoas;
    }
}

export class PessoaSimplifiedService extends PessoaService{

    constructor(private numCarateres: number){
        super(new LogService('ERROR'));
    }

    override adicionar(nome: string): void {
        super.adicionar(nome.substring(0, this.numCarateres) + '...');
    }

}