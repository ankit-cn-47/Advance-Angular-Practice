import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input'
})
export class InputRefDirective {

  focus = false;
  constructor() { }

  @HostListener('focus')
  onFocus() {
    console.log(this.focus);
    this.focus = true;
  }

  @HostListener('blur')
  onblur() {
    console.log(this.focus);
    this.focus = false;
  }

}
