import { Component } from "@angular/core";

@Component({
    selector: 'app-hello',
    // template: `
    //     <h2>
    //         Hello {{nome}}
    //     </h2>
    // `
    templateUrl: './hello.component.html'
})
export class HelloComponent{

    valor = 'Teste';
}