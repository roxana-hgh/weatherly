import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherForcastService } from '../../services/weather-forcast.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent implements OnInit {
  location!: string;
  res!: any;

  constructor(
    private weatherService: WeatherForcastService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    let location = this.captureLocationFromURL();
    if (location) {
      this.location = location;
      this.getRealTimeWeather();

    } else {
      this.location = 'Shiraz';
      this.getRealTimeWeather();
    }

    console.log(this.location);
    
  }

  /**
   * Extracts location from route parameter 'location' and returns it as a string
   * @returns {string} location
   */
  private captureLocationFromURL() {
    return String(this.route.snapshot.paramMap.get('location'));
  }
  getRealTimeWeather() {
    this.weatherService
      .get_RealtimeWeather(this.location, 'metric')
      .subscribe((res) => {
        this.res = res;
        console.log(res);
      });
  }
}
