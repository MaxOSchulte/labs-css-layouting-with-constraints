import { Component } from '@angular/core';
import { CellDirective } from '../../cell.directive';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    providers: [
        {provide: CellDirective, useExisting: TitleComponent},
    ],
})
export class TitleComponent extends CellDirective {
}
