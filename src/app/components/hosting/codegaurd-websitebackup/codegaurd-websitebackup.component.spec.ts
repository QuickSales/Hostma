import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodegaurdWebsitebackupComponent } from './codegaurd-websitebackup.component';

describe('CodegaurdWebsitebackupComponent', () => {
  let component: CodegaurdWebsitebackupComponent;
  let fixture: ComponentFixture<CodegaurdWebsitebackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodegaurdWebsitebackupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodegaurdWebsitebackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
