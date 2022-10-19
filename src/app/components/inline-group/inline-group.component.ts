import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CellDirective } from '../../directives/cell.directive';

@Component({
  selector: 'app-inline-group',
  templateUrl: './inline-group.component.html',
  styleUrls: ['./inline-group.component.scss'],
  providers: [
    {provide: CellDirective, useExisting: InlineGroupComponent}
  ]
})
export class InlineGroupComponent extends CellDirective {
  @HostBinding('style.--inline-group-columns')
  @Input() columns = 2;
}
