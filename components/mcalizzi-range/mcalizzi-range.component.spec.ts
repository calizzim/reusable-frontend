import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziRangeComponent } from './mcalizzi-range.component';

describe('McalizziRangeComponent', () => {
  let component: McalizziRangeComponent;
  let fixture: ComponentFixture<McalizziRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
