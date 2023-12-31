import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCityWeatherComponent } from './search-city-weather.component';

describe('SearchCityWeatherComponent', () => {
  let component: SearchCityWeatherComponent;
  let fixture: ComponentFixture<SearchCityWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchCityWeatherComponent]
    });
    fixture = TestBed.createComponent(SearchCityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
