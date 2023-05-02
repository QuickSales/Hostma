import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxSharedHostingComponent } from './linux-shared-hosting.component';

describe('LinuxSharedHostingComponent', () => {
  let component: LinuxSharedHostingComponent;
  let fixture: ComponentFixture<LinuxSharedHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxSharedHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinuxSharedHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
