import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherForcastService } from '../../services/weather-forcast.service';
import { Settings } from '../../setting';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrl: './weather-details.component.scss',
})
export class WeatherDetailsComponent implements OnInit {
  location!: string;
  res!: any;
  temperatureUnit = "c"

  statusCodesData = Settings.weatherCode

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

  //   this.res = {
  //     "data": {
  //         "time": "2024-09-13T11:05:00Z",
  //         "values": {
  //             "cloudBase": null,
  //             "cloudCeiling": null,
  //             "cloudCover": 9,
  //             "dewPoint": 2.63,
  //             "freezingRainIntensity": 0,
  //             "humidity": 13,
  //             "precipitationProbability": 0,
  //             "pressureSurfaceLevel": 887.82,
  //             "rainIntensity": 0,
  //             "sleetIntensity": 0,
  //             "snowIntensity": 0,
  //             "temperature": 35.13,
  //             "temperatureApparent": 32.57,
  //             "uvHealthConcern": 1,
  //             "uvIndex": 4,
  //             "visibility": 16,
  //             "weatherCode": 8000,
  //             "windDirection": 140.63,
  //             "windGust": 7.81,
  //             "windSpeed": 3.31
  //         }
  //     },
  //     "location": {
  //         "lat": 35.48344421386719,
  //         "lon": 51.41046142578125,
  //         "name": "استان تهران, ایران",
  //         "type": "administrative"
  //     }
  // }
  }
}
