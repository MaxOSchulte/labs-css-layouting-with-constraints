import { Component, OnInit } from '@angular/core';
import { CellDirective } from '../cell.directive';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent extends CellDirective {}
