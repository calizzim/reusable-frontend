import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziNotFoundComponent } from './mcalizzi-not-found.component';

describe('McalizziNotFoundComponent', () => {
  let component: McalizziNotFoundComponent;
  let fixture: ComponentFixture<McalizziNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
