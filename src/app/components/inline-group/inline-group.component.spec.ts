import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineGroupComponent } from './inline-group.component';

describe('InlineGroupComponent', () => {
  let component: InlineGroupComponent;
  let fixture: ComponentFixture<InlineGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
