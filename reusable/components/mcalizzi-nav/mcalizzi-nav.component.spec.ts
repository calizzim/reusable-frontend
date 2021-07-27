import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziNavComponent } from './mcalizzi-nav.component';

describe('McalizziNavComponent', () => {
  let component: McalizziNavComponent;
  let fixture: ComponentFixture<McalizziNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
