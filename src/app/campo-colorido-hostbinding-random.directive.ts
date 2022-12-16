import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColoridoHostbindingRandom]'
})
export class CampoColoridoHostbindingRandomDirective {

  cores:string[] = ['red', 'yellow', 'blue', 'brown', 'purple'];

  @HostBinding('style.backgroundColor')
  backgroundColorValue = this.cores[0];

  @HostListener('focus')
  onFocus(): void{
    this.backgroundColorValue = this.cores[(Math.round(Math.random() * 4) + 1)];
  }

  @HostListener('blur')
  onBlur(): void{
    this.backgroundColorValue = this.cores[0];
  }
}
