import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSubGroupsComponent } from './grid-sub-groups.component';

describe('GridSubGroupsComponent', () => {
  let component: GridSubGroupsComponent;
  let fixture: ComponentFixture<GridSubGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSubGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSubGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
