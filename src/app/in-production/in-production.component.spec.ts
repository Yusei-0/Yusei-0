import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InProductionComponent } from './in-production.component';

describe('InProductionComponent', () => {
  let component: InProductionComponent;
  let fixture: ComponentFixture<InProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
