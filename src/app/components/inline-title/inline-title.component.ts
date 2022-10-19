import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { CellDirective } from '../../directives/cell.directive';

@Component({
  selector: 'app-inline-title',
  templateUrl: './inline-title.component.html',
  styleUrls: ['./inline-title.component.scss'],
  providers: [
    {provide: CellDirective, useExisting: InlineTitleComponent}
  ]
})
export class InlineTitleComponent extends CellDirective{
}
