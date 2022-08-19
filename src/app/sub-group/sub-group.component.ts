import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  HostBinding, OnDestroy,
  QueryList,
} from '@angular/core';
import { CellDirective } from '../cell.directive';
import { CellSelectorDirective } from '../cell-selector.directive';
import { BehaviorSubject, map, startWith, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-sub-group',
  templateUrl: './sub-group.component.html',
  styleUrls: ['./sub-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{provide: CellSelectorDirective, useExisting: SubGroupComponent}]
})
export class SubGroupComponent extends CellDirective implements AfterContentInit, OnDestroy {
  @ContentChildren(CellSelectorDirective)
  filledCells ?: QueryList<CellSelectorDirective>;

  cellHeightSum$$ = new BehaviorSubject<number | undefined>(9999);
  private destroy$$ = new Subject<void>();

  @HostBinding('style.--cell-height-sum')
  get cellHeightSum(): number | undefined {
    return this.cellHeightSum$$.value;
  }

  ngAfterContentInit() {
    this.filledCells?.changes.pipe(
      takeUntil(this.destroy$$),
      map(change => change.length),
      startWith(this.filledCells),
    ).subscribe((filledCells: QueryList<CellSelectorDirective>) => {
      this.cellHeightSum$$.next(
        filledCells?.reduce((sum, {height}) => sum + Number.parseInt((height ?? 1) + '', 10) ?? 1, 0),
      );
    })
  }

  ngOnDestroy() {
    this.destroy$$.next();
  }
}
