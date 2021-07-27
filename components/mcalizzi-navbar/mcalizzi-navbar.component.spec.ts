import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziNavbarComponent } from './mcalizzi-navbar.component';

describe('McalizziNavbarComponent', () => {
  let component: McalizziNavbarComponent;
  let fixture: ComponentFixture<McalizziNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
