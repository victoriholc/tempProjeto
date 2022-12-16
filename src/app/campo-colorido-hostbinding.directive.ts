import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColoridoHostbinding]'
})
export class CampoColoridoHostbindingDirective {

  @Input()
  cor1 = '';
  @Input()
  cor2 = '';
  @Input()
  cor3 = '';

  @HostBinding('style.backgroundColor')
  backgroundColorValue = this.cor1;

  @HostListener('focus')
  onFocus(): void{
    this.backgroundColorValue = this.cor2;
  }

  @HostListener('blur')
  onBlur(): void{
    this.backgroundColorValue = this.cor3;
  }

}
