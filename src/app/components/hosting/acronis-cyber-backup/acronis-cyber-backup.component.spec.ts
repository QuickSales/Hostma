import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcronisCyberBackupComponent } from './acronis-cyber-backup.component';

describe('AcronisCyberBackupComponent', () => {
  let component: AcronisCyberBackupComponent;
  let fixture: ComponentFixture<AcronisCyberBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcronisCyberBackupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcronisCyberBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
