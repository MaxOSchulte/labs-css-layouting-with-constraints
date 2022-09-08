import {
    AfterContentInit,
    Component,
    ContentChildren,
    HostBinding,
    Input,
    QueryList,
} from '@angular/core';
import { CellDirective } from '../cell.directive';
import { CellSelectorDirective } from '../cell-selector.directive';
import { filter, startWith } from 'rxjs';
import { SubGroupComponent } from '../sub-group/sub-group.component';

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
})
export class GroupComponent extends CellDirective implements AfterContentInit {
    @HostBinding('style.--main-columns')
    @Input()
    columns: 4 | 8 | 12 | 16 = 12;

    @HostBinding('style.--main-rows')
    @Input()
    rows = 4;

    @HostBinding('style.--m-columns')
    @Input()
    mColumns = 8;

    @HostBinding('style.--s-columns')
    @Input()
    sColumns = 4;

    @HostBinding('style.--field-width')
    @Input()
    override width?: number | string = undefined;

    @HostBinding('style.--cell-height-sum')
    cellHeightSum = 9999;

    @HostBinding('style.--cell-height-max')
    private cellHeightMax?: number;

    @ContentChildren(CellSelectorDirective)
    filledCells?: QueryList<CellSelectorDirective>;

    ngAfterContentInit() {
        this.filledCells?.changes
            .pipe(
                startWith(this.filledCells),
                filter((cells: QueryList<CellSelectorDirective>) =>
                    cells.some((cell) => cell instanceof SubGroupComponent)
                )
            )
            .subscribe((filledCells: QueryList<CellSelectorDirective>) => {
                const heights = filledCells.map(
                    ({ height, cellHeightSum$$ }) =>
                        cellHeightSum$$?.value ??
                        Number.parseInt((height ?? 1) + '', 10)
                );

                this.cellHeightSum = heights.reduce(
                    (sum, height) => sum + height,
                    0
                );
                this.cellHeightMax = Math.max(...heights);
            });
    }
}
