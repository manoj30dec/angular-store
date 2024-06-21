import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyclesComponent } from './life-cycles.component';

describe('OnInitComponent', () => {
  let component: LifeCyclesComponent;
  let fixture: ComponentFixture<LifeCyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCyclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
