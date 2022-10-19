import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CellDirective } from '../../directives/cell.directive';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [
    {provide: CellDirective, useExisting: ItemComponent}
  ]
})
export class ItemComponent extends CellDirective{
}
