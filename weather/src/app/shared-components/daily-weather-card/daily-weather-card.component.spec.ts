import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyWeatherCardComponent } from './daily-weather-card.component';

describe('DailyWeatherCardComponent', () => {
  let component: DailyWeatherCardComponent;
  let fixture: ComponentFixture<DailyWeatherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DailyWeatherCardComponent]
    });
    fixture = TestBed.createComponent(DailyWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
