import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalStaemanagementComponent } from './global-staemanagement.component';

describe('GlobalStaemanagementComponent', () => {
  let component: GlobalStaemanagementComponent;
  let fixture: ComponentFixture<GlobalStaemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalStaemanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalStaemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
