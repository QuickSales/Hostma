import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressSharedHostingComponent } from './wordpress-shared-hosting.component';

describe('WordpressSharedHostingComponent', () => {
  let component: WordpressSharedHostingComponent;
  let fixture: ComponentFixture<WordpressSharedHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordpressSharedHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordpressSharedHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
