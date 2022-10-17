import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent {
  // @HostBinding('style.--item-width')
  // @Input() width?: number;
  //
  // @HostBinding('style.--item-height')
  // @Input() height?: number;
}
