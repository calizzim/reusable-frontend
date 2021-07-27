import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziFormComponent } from './mcalizzi-form.component';

describe('McalizziFormComponent', () => {
  let component: McalizziFormComponent;
  let fixture: ComponentFixture<McalizziFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
