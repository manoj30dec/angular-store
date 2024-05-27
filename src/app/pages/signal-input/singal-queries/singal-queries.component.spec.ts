import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingalQueriesComponent } from './singal-queries.component';

describe('SingalQueriesComponent', () => {
  let component: SingalQueriesComponent;
  let fixture: ComponentFixture<SingalQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingalQueriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingalQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
