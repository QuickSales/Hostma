import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsSharedHostingComponent } from './windows-shared-hosting.component';

describe('WindowsSharedHostingComponent', () => {
  let component: WindowsSharedHostingComponent;
  let fixture: ComponentFixture<WindowsSharedHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsSharedHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsSharedHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
