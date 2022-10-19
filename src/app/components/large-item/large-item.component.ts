import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CellDirective } from '../../directives/cell.directive';

@Component({
  selector: 'app-large-item',
  templateUrl: './large-item.component.html',
  styleUrls: ['./large-item.component.scss'],
  providers: [
    {provide: CellDirective, useExisting: LargeItemComponent}
  ]
})
export class LargeItemComponent extends CellDirective{
}
