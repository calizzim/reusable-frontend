import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McalizziSignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: McalizziSignupComponent;
  let fixture: ComponentFixture<McalizziSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ McalizziSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(McalizziSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
