import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxKvmVpsComponent } from './linux-kvm-vps.component';

describe('LinuxKvmVpsComponent', () => {
  let component: LinuxKvmVpsComponent;
  let fixture: ComponentFixture<LinuxKvmVpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinuxKvmVpsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinuxKvmVpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
