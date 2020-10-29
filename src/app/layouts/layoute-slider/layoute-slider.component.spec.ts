import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayouteSliderComponent } from './layoute-slider.component';

describe('LayouteSliderComponent', () => {
  let component: LayouteSliderComponent;
  let fixture: ComponentFixture<LayouteSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayouteSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayouteSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
