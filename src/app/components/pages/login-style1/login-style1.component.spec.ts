import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginStyle1Component } from './login-style1.component';

describe('LoginStyle1Component', () => {
  let component: LoginStyle1Component;
  let fixture: ComponentFixture<LoginStyle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginStyle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
