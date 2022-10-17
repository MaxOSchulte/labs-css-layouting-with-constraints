import { AfterContentInit, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { GroupComponent } from '../group/group.component';
import { CellDirective } from '../../directives/cell.directive';
import { map, Observable, of, startWith } from 'rxjs';

@Component({
  selector: 'app-sub-group',
  templateUrl: './sub-group.component.html',
  styleUrls: ['./sub-group.component.scss'],
})
export class SubGroupComponent {
  @Input() columns?: string | number = 1;

  @ContentChildren(CellDirective, {descendants: false})
  cells?: QueryList<CellDirective>;

  constructor(private readonly group: GroupComponent) {
  }

  getRequiredRows$(): Observable<number> {
    return this.cells?.changes.pipe(
      startWith(this.cells.toArray()),
      map((x: CellDirective[]) => {
      const occupiedGroupCells = x.map((cell: CellDirective) => cell.cellHeight * cell.cellHWidth).reduce((a: number, b: number) => a + b, 0);
      const groupCells = Math.ceil(occupiedGroupCells / Number.parseInt(this.columns + '', 0));


      console.log('[DEBUG] cells', x.length);
      console.log('[DEBUG] occupied sum', occupiedGroupCells);
      console.log('[DEBUG] group cells', groupCells);
      console.log('[DEBUG] -------------------------------------------')

      return Math.ceil(occupiedGroupCells / Number.parseInt(this.columns + '', 0));
    })) || of(0);
  }





  @HostBinding('style.grid-row')
  private get gridRowSpan(): string {
    return `span ${this.group.rows}`
  }

  @HostBinding('style.--subgrid-rows')
  private get gridRows(): number {
    return this.group.groupRows;
  }

  @HostBinding('style.--subgrid-columns')
  private get gridColSpan(): number | string | undefined {
    return this.columns;
  }
}
