import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziCollapseComponent } from './mcalizzi-collapse.component';

describe('McalizziCollapseComponent', () => {
  let component: McalizziCollapseComponent;
  let fixture: ComponentFixture<McalizziCollapseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziCollapseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
