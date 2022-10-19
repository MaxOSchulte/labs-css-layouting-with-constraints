import { Component, HostBinding, Input } from '@angular/core';
import { ScreenSizeService } from '../../utils/screen-size.service';
import { map, Observable } from 'rxjs';
import { ScreenSize } from '../../utils/screen-size';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent {
  @HostBinding('style.--group-l-columns')
  @Input() columns?: number | string = 4;

  @HostBinding('style.--group-m-columns')
  @Input() mColumns?: number | string = 2

  availableColumns$: Observable<number> = this.screenSizeService.active$.pipe(
    map(screenSize => {
      switch (screenSize) {
        case ScreenSize.m:
        case ScreenSize.s:
          return Number.parseInt(this.mColumns + '');
          break;
        case ScreenSize.xs:
          return 1;
          break;
      }
      return Number.parseInt(this.columns + '');
    }),
  );

  constructor(private screenSizeService: ScreenSizeService) {
  }
}
