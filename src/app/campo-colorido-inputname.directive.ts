import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColoridoInputname]'
})
export class CampoColoridoInputnameDirective {

  @Input('appCampoColoridoInputname')
  cor = 'gray';

  @HostBinding('style.backgroundColor')
  backgroundColorValue = '';

  @HostListener('focus')
  onFocus(): void{
    this.backgroundColorValue = this.cor;
  }

  @HostListener('blur')
  onBlur(): void{
    this.backgroundColorValue = 'transparent';
  }

}
