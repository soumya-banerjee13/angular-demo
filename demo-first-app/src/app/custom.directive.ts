import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor() { }
  @HostListener("focus") onBlur() {
    console.log("on Blur");
  }
}
