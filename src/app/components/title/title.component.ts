import { Component, OnInit } from '@angular/core';
import { CellDirective } from '../../cell.directive';
import { CellSelectorDirective } from '../../cell-selector.directive';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    providers: [
        { provide: CellSelectorDirective, useExisting: TitleComponent },
    ],
})
export class TitleComponent extends CellDirective {}
