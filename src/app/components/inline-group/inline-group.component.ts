import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-group',
  templateUrl: './inline-group.component.html',
  styleUrls: ['./inline-group.component.scss']
})
export class InlineGroupComponent {
  @HostBinding('style.--inline-group-columns')
  @Input() columns = 2;
}
