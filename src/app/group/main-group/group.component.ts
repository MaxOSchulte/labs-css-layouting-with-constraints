import { Component, HostBinding, Input } from '@angular/core';
import { CellDirective } from '../../cell.directive';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent extends CellDirective {
  @HostBinding('style.--main-columns')
  @Input() columns: 4 | 8 | 12 | 16 = 12;

  @HostBinding('style.--main-rows')
  @Input() rows = 4

  @HostBinding('style.--m-columns')
  @Input() mColumns = 8

  @HostBinding('style.--s-columns')
  @Input() sColumns = 4

  @HostBinding('style.--field-width')
  @Input() override width?: number | string = undefined;
}
