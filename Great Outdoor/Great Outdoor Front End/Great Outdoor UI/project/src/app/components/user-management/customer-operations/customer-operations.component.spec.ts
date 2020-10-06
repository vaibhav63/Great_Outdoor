import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOperationsComponent } from './customer-operations.component';

describe('CustomerOperationsComponent', () => {
  let component: CustomerOperationsComponent;
  let fixture: ComponentFixture<CustomerOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
