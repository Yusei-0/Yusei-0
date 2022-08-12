import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationImgComponent } from './education-img.component';

describe('EducationImgComponent', () => {
  let component: EducationImgComponent;
  let fixture: ComponentFixture<EducationImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
