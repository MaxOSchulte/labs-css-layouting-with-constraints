import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCell]',
})
export class CellDirective {
  @Input() width?: number | string = 1;
  @Input() height?: number | string = 1;

  @HostBinding('style.--cell-height')
  get cellHeight(): number {
    return Number.parseInt(this.height + '', 10);
  }

  @HostBinding('style.--cell-width')
  get cellHWidth(): number {
    return Number.parseInt(this.width + '', 10);
  }
}
