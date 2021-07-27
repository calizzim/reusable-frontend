import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziPiechartComponent } from './mcalizzi-piechart.component';

describe('McalizziPiechartComponent', () => {
  let component: McalizziPiechartComponent;
  let fixture: ComponentFixture<McalizziPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziPiechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
