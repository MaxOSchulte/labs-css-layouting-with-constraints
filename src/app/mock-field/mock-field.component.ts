import { Component, HostBinding, Input } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: 'app-mock-field',
  templateUrl: './mock-field.component.html',
  styleUrls: ['./mock-field.component.scss'],
})
export class MockFieldComponent extends CellDirective {}
