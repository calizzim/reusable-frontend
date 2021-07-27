import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziLinechartComponent } from './mcalizzi-linechart.component';

describe('McalizziLinechartComponent', () => {
  let component: McalizziLinechartComponent;
  let fixture: ComponentFixture<McalizziLinechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziLinechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziLinechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
