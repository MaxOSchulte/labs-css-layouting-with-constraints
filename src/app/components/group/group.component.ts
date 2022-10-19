import { AfterViewInit, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { GroupService } from './group.service';
import { SubGroupComponent } from '../sub-group/sub-group.component';
import { combineLatest, map, startWith, switchMap } from 'rxjs';
import { ScreenSizeService } from '../../utils/screen-size.service';
import { ScreenSize } from '../../utils/screen-size';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  providers: [GroupService],
})
export class GroupComponent implements AfterViewInit {
  // @Input() rows?: number | string;

  @Input() columns?: number | string = 4;
  @Input() mColumns?: number | string = 2

  @ContentChildren(SubGroupComponent, {descendants: false}) subGroups?: QueryList<SubGroupComponent[]>;


  private usedColumns = this.columns;

  constructor(private readonly screenSizeService: ScreenSizeService) {
    this.screenSizeService.active$.subscribe(screenSize => {
      console.log(screenSize, screenSize === ScreenSize.s)
      if (screenSize === ScreenSize.m || screenSize === ScreenSize.s) {
        this.usedColumns = this.mColumns;
      } else {
        this.usedColumns = this.columns;
      }
    })
  }

  // @HostBinding('style.--group-rows')
  // get groupRows(): number {
  //   return Number.parseInt(this.rows + '', 10);
  // }

  @HostBinding('style.--group-columns')
  get groupColumns(): number {
    return Number.parseInt(this.usedColumns + '', 10);
  }

  get inBreakpoint(): boolean {
    return this.usedColumns !== this.columns;
  }

  ngAfterViewInit() {
    this.subGroups?.changes.pipe(
      startWith(this.subGroups!.toArray()),
      map((subGroups: SubGroupComponent[]) => subGroups.map(group => group.getRequiredRows$())),
      switchMap(requiredRowsByGroup => combineLatest([...requiredRowsByGroup])),
    )
      // .subscribe(x => setTimeout(() => this.calculateRoes(x)));
    .subscribe(x => setTimeout(() => console.log('sub group rows')));
  }

  // calculateRoes(subGroupHeights: number[]): void {
  //   if (this.inBreakpoint) {
  //     switch (subGroupHeights.length) {
  //       case 0:
  //         this.rows = 0;
  //         break;
  //       case 1:
  //         this.rows = subGroupHeights[0];
  //         break;
  //       case 2:
  //         this.rows = Math.max(...subGroupHeights);
  //         break;
  //       case 3:
  //         this.rows = Math.max(subGroupHeights[0], subGroupHeights[1]) + Math.max(subGroupHeights[1], subGroupHeights[2]);
  //         break;
  //       case 4:
  //         this.rows = Math.max(subGroupHeights[0], subGroupHeights[1]) + Math.max(subGroupHeights[2] + subGroupHeights[3]);
  //         break;
  //     }
  //     // this.rows = subGroupHeights.reduce((a,b) => a + b, 0);
  //   } else {
  //     this.rows = Math.max(...subGroupHeights);
  //   }
  //
  // }
}
