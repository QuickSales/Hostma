import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxResellerHostingComponent } from './linux-reseller-hosting.component';

describe('LinuxResellerHostingComponent', () => {
  let component: LinuxResellerHostingComponent;
  let fixture: ComponentFixture<LinuxResellerHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxResellerHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinuxResellerHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
