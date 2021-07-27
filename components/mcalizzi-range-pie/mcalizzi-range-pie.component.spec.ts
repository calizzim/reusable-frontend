import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziRangePieComponent } from './mcalizzi-range-pie.component';

describe('McalizziRangePieComponent', () => {
  let component: McalizziRangePieComponent;
  let fixture: ComponentFixture<McalizziRangePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziRangePieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziRangePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
