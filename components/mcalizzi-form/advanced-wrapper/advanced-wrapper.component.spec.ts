import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedWrapperComponent } from './advanced-wrapper.component';

describe('AdvancedWrapperComponent', () => {
  let component: AdvancedWrapperComponent;
  let fixture: ComponentFixture<AdvancedWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
