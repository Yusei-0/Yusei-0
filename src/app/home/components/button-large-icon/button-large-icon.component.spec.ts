import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLargeIconComponent } from './button-large-icon.component';

describe('ButtonLargeIconComponent', () => {
  let component: ButtonLargeIconComponent;
  let fixture: ComponentFixture<ButtonLargeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLargeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLargeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
