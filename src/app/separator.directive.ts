import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSeparator]'
})
export class SeparatorDirective {
  @HostBinding('class.separator') separator = true;
}
