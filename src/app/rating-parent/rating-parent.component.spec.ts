import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingParentComponent } from './rating-parent.component';

describe('RatingParentComponent', () => {
  let component: RatingParentComponent;
  let fixture: ComponentFixture<RatingParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
