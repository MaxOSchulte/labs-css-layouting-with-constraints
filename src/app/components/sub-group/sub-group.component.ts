import { AfterContentInit, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { CellDirective } from '../../directives/cell.directive';
import { combineLatest, map, of, startWith } from 'rxjs';
import { ScreenSizeService } from '../../utils/screen-size.service';
import { GroupComponent } from '../group/group.component';

@Component({
  selector: 'app-sub-group',
  templateUrl: './sub-group.component.html',
  styleUrls: ['./sub-group.component.scss'],
})
export class SubGroupComponent implements AfterContentInit {
  @Input() columns?: string | number = 1;
  @Input() mColumns?: string | number = 1;

  @ContentChildren(CellDirective, {descendants: false})
  cells?: QueryList<CellDirective>;
  private requiredRows?: number;

  constructor(private readonly screenSizeService: ScreenSizeService, private readonly groupComponent: GroupComponent) {
  }

  @HostBinding('style.grid-row')
  private get gridRowSpan(): string {
    return `span ${this.requiredRows}`
  }

  @HostBinding('style.--sub-group-rows')
  private get gridRows(): number {
    return this.requiredRows || 1;
  }

  @HostBinding('style.--cell-width')
  @HostBinding('style.--sub-group-columns')
  private get gridColumns(): number {
    return Number.parseInt(this.columns + '');
  }

  ngAfterContentInit() {
    combineLatest(
      [this.groupComponent.availableColumns$,
        (this.cells?.changes.pipe(startWith(this.cells!.toArray())) || of([])),
      ],
    )
      .pipe(
        map(([parentColumns, cells]: [number, CellDirective[]]) => {
          const availableColumns = Math.min(this.gridColumns, parentColumns as number)

          const occupiedGroupCells = cells.map((cell: CellDirective) => cell.cellHeight * Math.min(cell.cellHWidth, availableColumns)).reduce((a: number, b: number) => a + b, 0);
          console.log(availableColumns, occupiedGroupCells)
          return Math.ceil(occupiedGroupCells / availableColumns);
        }),
      ).subscribe(requiredRows => this.requiredRows = requiredRows);
  }
}
