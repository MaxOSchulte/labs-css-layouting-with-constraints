import { Directive, HostBinding, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({
    selector: '[appMockField]',
})
export class CellDirective {
    readonly DEFAULT_WIDTH = 4;
    readonly DEFAULT_HEIGHT = 1;

    @HostBinding('style.--field-width')
    @Input()
    set width(newWidth: number | string | undefined) {
        this._width = Number.parseInt((newWidth ?? this.DEFAULT_WIDTH) + '', 10);
    };

    @HostBinding('style.--field-height')
    @Input() set height(newHeight: number | string | undefined) {
        if (Number.isInteger(newHeight)) {
            this._height= Number.parseInt((newHeight ?? this.DEFAULT_HEIGHT) + '', 10);
        }
    }

    get height(): number {
        return this._height;
    }

    get width(): number {
        return this._width;
    }

    private _height = this.DEFAULT_HEIGHT;
    private _width = this.DEFAULT_WIDTH;

    cellHeightSum$$?: BehaviorSubject<number | undefined>;
}
