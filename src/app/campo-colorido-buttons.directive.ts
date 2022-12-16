import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColoridoButtons]',
  exportAs: 'campoColorido'
})
export class CampoColoridoButtonsDirective {

  @HostBinding('style.backgroundColor')
  backgroundColorValue = '';

  @HostListener('focus')
  colorir(): void{
    this.backgroundColorValue = 'pink';
  }

  @HostListener('blur')
  descolorir(): void{
    this.backgroundColorValue = 'transparent';
  }

}
