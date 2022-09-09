import { Component } from '@angular/core';
import { CellDirective } from '../../cell.directive';

@Component({
    selector: 'app-mock-field',
    templateUrl: './mock-field.component.html',
    styleUrls: ['./mock-field.component.scss'],
    providers: [
        {provide: CellDirective, useExisting: MockFieldComponent},
    ],
})
export class MockFieldComponent extends CellDirective {
}
