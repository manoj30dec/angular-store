import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeHeaderComponent } from './prime-header.component';

describe('PrimeHeaderComponent', () => {
  let component: PrimeHeaderComponent;
  let fixture: ComponentFixture<PrimeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
