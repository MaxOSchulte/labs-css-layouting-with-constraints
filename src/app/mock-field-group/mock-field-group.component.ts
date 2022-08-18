import { Component, HostBinding, Input } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: 'app-mock-field-group',
  templateUrl: './mock-field-group.component.html',
  styleUrls: ['./mock-field-group.component.scss'],
})
export class MockFieldGroupComponent extends CellDirective {
  @HostBinding('style.--inline-group-columns')
  @Input() columns?: number | string;

  @Input() useSpan?: boolean | '';

  @HostBinding('style.--fallback-sizing')
  private get fallbackColumns(): number | string | undefined {
    return this.useSpan || this.useSpan === '' ? '--columns-span' : undefined;
  }
}
