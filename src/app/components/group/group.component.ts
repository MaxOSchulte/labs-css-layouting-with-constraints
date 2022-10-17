import { AfterViewInit, Component, ContentChildren, HostBinding, Input, QueryList } from '@angular/core';
import { GroupService } from './group.service';
import { SubGroupComponent } from '../sub-group/sub-group.component';
import { combineLatest, map, startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  providers: [GroupService],
})
export class GroupComponent implements AfterViewInit {
  @Input() rows?: number | string;

  @Input() columns?: number | string;
  @Input() mColumns?: number | string = 2
  @Input() sColumns?: number | string = 1;

  @ContentChildren(SubGroupComponent, {descendants: false}) subGroups?: QueryList<SubGroupComponent[]>;

  @HostBinding('style.--group-rows')
  get groupRows(): number {
    return Number.parseInt(this.rows + '', 10);
  }

  @HostBinding('style.--group-columns')
  get groupColumns(): number {
    return Number.parseInt(this.columns + '', 10);
  }

  ngAfterViewInit() {
    this.subGroups?.changes.pipe(
      startWith(this.subGroups!.toArray()),
      map((subGroups: SubGroupComponent[]) => subGroups.map(group => group.getRequiredRows$())),
      switchMap(requiredRowsByGroup => combineLatest([...requiredRowsByGroup])),
      map(heights => Math.max(...heights)),
    )
      .subscribe(x => {
        setTimeout(() => this.rows = x);

      });
  }
}
