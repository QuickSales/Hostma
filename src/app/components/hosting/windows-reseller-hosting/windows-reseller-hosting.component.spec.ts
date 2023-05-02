import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsResellerHostingComponent } from './windows-reseller-hosting.component';

describe('WindowsResellerHostingComponent', () => {
  let component: WindowsResellerHostingComponent;
  let fixture: ComponentFixture<WindowsResellerHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowsResellerHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsResellerHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
