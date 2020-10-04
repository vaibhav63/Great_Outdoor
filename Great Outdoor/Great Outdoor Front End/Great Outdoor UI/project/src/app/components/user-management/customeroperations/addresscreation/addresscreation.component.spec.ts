import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddresscreationComponent } from './addresscreation.component';
describe('AddresscreationComponent', () => {
  let component: AddresscreationComponent;
  let fixture: ComponentFixture<AddresscreationComponent>;

  beforeEach(async (() => {
     TestBed.configureTestingModule({
      declarations: [ AddresscreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddresscreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
