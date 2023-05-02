import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsDedicatedServersComponent } from './windows-dedicated-servers.component';

describe('WindowsDedicatedServersComponent', () => {
  let component: WindowsDedicatedServersComponent;
  let fixture: ComponentFixture<WindowsDedicatedServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsDedicatedServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsDedicatedServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
