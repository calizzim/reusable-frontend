import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziTableComponent } from './mcalizzi-table.component';

describe('McalizziTableComponent', () => {
  let component: McalizziTableComponent;
  let fixture: ComponentFixture<McalizziTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
