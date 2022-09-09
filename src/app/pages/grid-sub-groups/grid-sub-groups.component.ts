import {
    AfterViewInit,
    Component,
    QueryList,
    ViewChildren,
} from '@angular/core';
import { CellSelectorDirective } from '../../cell-selector.directive';
import { map, startWith } from 'rxjs';

@Component({
    selector: 'app-grid-sub-groups',
    templateUrl: './grid-sub-groups.component.html',
    styleUrls: ['./grid-sub-groups.component.scss'],
})
export class GridSubGroupsComponent {}
