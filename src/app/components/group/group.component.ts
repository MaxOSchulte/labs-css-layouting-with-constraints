import { AfterContentInit, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { CellDirective } from '../../cell.directive';
import { filter, startWith } from 'rxjs';
import { SubGroupComponent } from '../sub-group/sub-group.component';

export type Columns = 4 | 8 | 12 | 16;

@Component({
    selector: 'app-group',
    templateUrl: './group.component.html',
    styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements AfterContentInit {
    @HostBinding('style.--main-columns')
    @Input()
    columns: Columns = 12;

    @HostBinding('style.--main-rows')
    @Input()
    rows: number = 4;

    @HostBinding('style.--m-columns')
    @Input()
    mColumns: Columns = 8;

    @HostBinding('style.--s-columns')
    @Input()
    sColumns: Columns = 4;

    @HostBinding('style.--cell-height-sum')
    cellHeightSum = 9999;

    @HostBinding('style.--cell-height-max')
    private cellHeightMax?: number;

    @HostBinding('style.occupied-cells')
    private occupiedCells: number = 0;

    @ContentChildren(CellDirective)
    filledCells?: QueryList<CellDirective>;

    @HostBinding('style.--group-dynamic-extra-rows')
    public extraRows: number = 0;

    ngAfterContentInit() {
        this.filledCells?.changes
            .pipe(
                startWith(this.filledCells),
                filter((cells: QueryList<CellDirective>) =>
                    cells.some((cell) => cell instanceof SubGroupComponent),
                ),
            )
            .subscribe((filledCells: QueryList<CellDirective>) => {
                const heights = filledCells.map(
                    ({height, cellHeightSum$$}) =>
                        cellHeightSum$$?.value ??
                        Number.parseInt((height ?? 1) + '', 10),
                );

                this.cellHeightSum = heights.reduce(
                    (sum, height) => sum + height,
                    0,
                );

                console.log(this.filledCells?.toArray())
                this.occupiedCells = filledCells.reduce((sum, {
                    width,
                    height,
                }) => sum + (Number.parseInt((width ?? 4) + '', 10) / 4 * Number.parseInt((height ?? 1) + '', 10)), 0)
                console.log(this.columns, this.rows)
                const cells = (this.columns / 4) * this.rows;
                const missingCells = this.occupiedCells - cells;
                if (missingCells > 0) {
                    console.log('missing cells', missingCells)
                    let i = 0;
                    while (i * (this.columns / 4) < missingCells) {
                        i++;
                        console.log('extra', i)
                    }
                    this.extraRows = i;
                } else {
                    this.extraRows = 0;
                }
                console.log({occupiedCells: this.occupiedCells, cells, heightSum: this.cellHeightSum, extraRows: this.extraRows})

                this.cellHeightMax = Math.max(...heights);
            });
    }
}
