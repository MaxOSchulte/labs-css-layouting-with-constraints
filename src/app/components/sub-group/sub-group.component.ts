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

    @Input()
    @HostBinding('style.--sub-grid-height')
    override height?: number = undefined;

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
                this.cellHeightSum$$.next(
                    filledCells?.reduce(
                        (sum, {height}) =>
                            sum + Number.parseInt((height ?? 1) + '', 10) ?? 1,
                        0,
                    ),
                );
            });
    }

    ngOnDestroy() {
        this.destroy$$.next();
    }
}
