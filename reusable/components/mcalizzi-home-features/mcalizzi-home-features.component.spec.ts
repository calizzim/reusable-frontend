import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziHomeFeaturesComponent } from './mcalizzi-home-features.component';

describe('HomeFeaturesComponent', () => {
  let component: McalizziHomeFeaturesComponent;
  let fixture: ComponentFixture<McalizziHomeFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziHomeFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziHomeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
