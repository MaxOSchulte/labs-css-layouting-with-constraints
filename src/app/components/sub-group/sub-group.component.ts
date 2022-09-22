import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    HostBinding,
    Input,
    OnDestroy,
    QueryList,
} from '@angular/core';
import { CellDirective } from '../../cell.directive';
import { BehaviorSubject, map, startWith, Subject, takeUntil } from 'rxjs';
import { GroupComponent } from '../group/group.component';

@Component({
    selector: 'app-sub-group',
    templateUrl: './sub-group.component.html',
    styleUrls: ['./sub-group.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {provide: CellDirective, useExisting: SubGroupComponent},
    ],
})
export class SubGroupComponent
    extends CellDirective
    implements AfterContentInit, OnDestroy {
    @ContentChildren(CellDirective)
    filledCells?: QueryList<CellDirective>;

    override cellHeightSum$$ = new BehaviorSubject<number | undefined>(9999);
    private destroy$$ = new Subject<void>();

    constructor(private readonly group: GroupComponent) {
        super();
    }

    @HostBinding('style.--sub-grid-height')
    // @ts-ignore
    override get height() {
        console.log('get height from sub', this.group.rows + this.group.extraRows)
        return this.group.rows + this.group.extraRows;
    }

    @HostBinding('style.--cell-height-sum')
    get cellHeightSum(): number | undefined {
        return this.cellHeightSum$$.value;
    }

    ngAfterContentInit() {
        this.filledCells?.changes
            .pipe(
                takeUntil(this.destroy$$),
                map((change) => change.length),
                startWith(this.filledCells),
            )
            .subscribe((filledCells: QueryList<CellDirective>) => {
                const subGroupCells = this.height * (this.width / 4);
                const occupiedsubgroupcells = filledCells.reduce((sum, cell) => sum + (cell.height * (cell.width/4)), 0);
                console.log(filledCells.toArray())
                console.log({subGroupCells, occupiedsubgroupcells})





                this.cellHeightSum$$.next(
                    filledCells?.reduce(
                        (sum, {height}) =>
                            sum + Number.parseInt((height ?? 1) + '', 10) ?? 1,
                        0,
                    ),
                );
            });

        console.log('subgroup dimen', this.width, this.height)
        console.log('subgroup cells', Number.parseInt((this.width ?? 4) + '', 10) / 4 * Number.parseInt((this.height ?? 1) + '', 10) ?? 1)
    }

    ngOnDestroy() {
        this.destroy$$.next();
    }
}
