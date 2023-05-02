import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeWithEveryDomainComponent } from './free-with-every-domain.component';

describe('FreeWithEveryDomainComponent', () => {
  let component: FreeWithEveryDomainComponent;
  let fixture: ComponentFixture<FreeWithEveryDomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeWithEveryDomainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeWithEveryDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
