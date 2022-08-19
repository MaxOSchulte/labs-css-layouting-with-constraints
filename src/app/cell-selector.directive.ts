import { Directive, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Directive()
export class CellSelectorDirective {
  @Input() width?: number | string;
  @Input() height?: number | string;
  cellHeightSum$$?: BehaviorSubject<number | undefined>;
}
