import { Inject, Injectable } from "@angular/core";

@Injectable()
export class LogService{

    constructor(
       @Inject('LogServicePrefixo') private prefixo: string
    ){}

    log(msg: string): void{
        console.log(`${new Date().toDateString()} ${this.prefixo}: ${msg}`);
    }

}