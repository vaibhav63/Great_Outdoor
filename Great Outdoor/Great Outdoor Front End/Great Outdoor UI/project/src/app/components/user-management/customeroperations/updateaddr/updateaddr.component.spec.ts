import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateaddrComponent } from './updateaddr.component';

describe('UpdateaddrComponent', () => {
  let component: UpdateaddrComponent;
  let fixture: ComponentFixture<UpdateaddrComponent>;

  beforeEach(async (() => {
   TestBed.configureTestingModule({
      declarations: [ UpdateaddrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateaddrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
