import { Component, HostBinding, Input } from '@angular/core';
import { CellDirective } from '../cell.directive';
import { CellSelectorDirective } from '../cell-selector.directive';

@Component({
    selector: 'app-mock-field',
    templateUrl: './mock-field.component.html',
    styleUrls: ['./mock-field.component.scss'],
    providers: [
        { provide: CellSelectorDirective, useExisting: MockFieldComponent },
    ],
})
export class MockFieldComponent extends CellDirective {}
