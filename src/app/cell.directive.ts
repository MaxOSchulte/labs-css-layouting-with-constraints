import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appMockField]',
})
export class CellDirective {
    @HostBinding('style.--field-width')
    @Input()
    width?: number | string = 4;
    @HostBinding('style.--field-height')
    @Input()
    height?: number | string = 1;
}
