import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexExampleComponent } from './flex-example.component';

describe('FlexExampleComponent', () => {
  let component: FlexExampleComponent;
  let fixture: ComponentFixture<FlexExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
