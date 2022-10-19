import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScreenSize, ScreenSizes } from './screen-size';

@Injectable({providedIn: 'root'})
export class ScreenSizeService {
  /**
   * Contains the active screen size.
   */
  public readonly active$: Observable<ScreenSize>;
  private readonly active$$ = new BehaviorSubject<ScreenSize>(ScreenSize.xs);

  /**
   * Contains the current active screen size.
   */
  public get active(): ScreenSize {
    return this.active$$.value;
  }

  constructor() {
    this.active$ = this.active$$.asObservable();
    ScreenSizes.forEach((query) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener('change', (event: MediaQueryListEvent) => {
        if (event.matches) {
          this.active$$.next(event.media as ScreenSize);
        }
      });
      if (mediaQueryList.matches) {
        this.active$$.next(mediaQueryList.media as ScreenSize);
      }
    });
  }
}
