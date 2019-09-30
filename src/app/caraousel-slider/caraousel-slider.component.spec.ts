import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraouselSliderComponent } from './caraousel-slider.component';

describe('CaraouselSliderComponent', () => {
  let component: CaraouselSliderComponent;
  let fixture: ComponentFixture<CaraouselSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaraouselSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraouselSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
