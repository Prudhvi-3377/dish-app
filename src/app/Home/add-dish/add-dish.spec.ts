import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDish } from './add-dish';

describe('AddDish', () => {
  let component: AddDish;
  let fixture: ComponentFixture<AddDish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDish);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
