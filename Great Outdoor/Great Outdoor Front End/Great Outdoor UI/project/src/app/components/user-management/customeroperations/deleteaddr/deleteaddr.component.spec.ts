import {async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteaddrComponent } from './deleteaddr.component';
describe('DeleteaddrComponent', () => {
  let component: DeleteaddrComponent;
  let fixture: ComponentFixture<DeleteaddrComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteaddrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteaddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

