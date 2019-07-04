import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHostDirectives]'
})
export class HostDirectivesDirective {

  @HostBinding('attr.class') class = 'inactive';
  @HostListener('click') onClick() {
    this.class = this.class == 'inactive' ? 'active' : 'inactive';
  }
  /*constructor(public control: any) {}
  @HostBinding('class.valid') get valid() { return this.control.valid; }
  @HostBinding('class.invalid') get invalid() { return this.control.invalid; }*/

}
