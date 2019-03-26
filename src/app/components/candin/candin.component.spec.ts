import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandinComponent } from './candin.component';

describe('CandinComponent', () => {
  let component: CandinComponent;
  let fixture: ComponentFixture<CandinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
