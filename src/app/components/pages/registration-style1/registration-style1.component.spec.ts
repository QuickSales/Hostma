import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStyle1Component } from './registration-style1.component';

describe('RegistrationStyle1Component', () => {
  let component: RegistrationStyle1Component;
  let fixture: ComponentFixture<RegistrationStyle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationStyle1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationStyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
