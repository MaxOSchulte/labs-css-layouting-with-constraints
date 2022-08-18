import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridMultiColumnComponent } from './grid-multi-column.component';

describe('GridMultiColumnComponent', () => {
  let component: GridMultiColumnComponent;
  let fixture: ComponentFixture<GridMultiColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridMultiColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridMultiColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
