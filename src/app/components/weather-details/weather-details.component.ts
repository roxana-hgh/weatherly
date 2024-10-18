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
  temperatureUnit = 'c';
  active = 1;
  statusCodesData = Settings.weatherCode;
  locationGeo!: string;
  hourlyWeather!: any;
  dailyWeather!: any;

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
    // let res = {
    //   data: {
    //     time: '2024-09-13T20:05:00Z',
    //     values: {
    //       cloudBase: null,
    //       cloudCeiling: null,
    //       cloudCover: 9,
    //       dewPoint: 2.63,
    //       freezingRainIntensity: 0,
    //       humidity: 13,
    //       precipitationProbability: 0,
    //       pressureSurfaceLevel: 887.82,
    //       rainIntensity: 0,
    //       sleetIntensity: 0,
    //       snowIntensity: 0,
    //       temperature: 35.13,
    //       temperatureApparent: 32.57,
    //       uvHealthConcern: 1,
    //       uvIndex: 4,
    //       visibility: 16,
    //       weatherCode: 9000,
    //       windDirection: 140.63,
    //       windGust: 7.81,
    //       windSpeed: 3.31,
    //     },
    //   },
    //   location: {
    //     lat: 35.48344421386719,
    //     lon: 51.41046142578125,
    //     name: 'استان تهران, ایران',
    //     type: 'administrative',
    //   },
    // };
    // const formattedWeatherCode = this.formatWeatherCode( res.data.values.weatherCode, res.data.time)
    // res.data.values.weatherCode = formattedWeatherCode
    // this.res = res

    // this.locationGeo = `${this.res.location.lat}, ${this.res.location.lon}`;
    // console.log(this.res);
    // this.getHourlyWeather(this.locationGeo);
    // this.getDailyWeather(this.locationGeo);

    this.weatherService
      .get_RealtimeWeather(this.location, 'metric')
      .subscribe((res) => {
      const formattedWeatherCode = this.formatWeatherCode( res.data.values.weatherCode, res.data.time)
      res.data.values.weatherCode = formattedWeatherCode
      this.res = res
        this.res = res;
        this.locationGeo = `${res.location.lat}, ${res.location.lon}`
        console.log(res);
        this.getHourlyWeather(this.locationGeo);
        this.getDailyWeather(this.locationGeo);
      });
  }

  getHourlyWeather(location: string) {
    this.weatherService.get_HourlyWeather(location).subscribe((res) => {
      
      res = res.data.timelines[0].intervals.map((item: any) => {
        const formattedWeatherCode = this.formatWeatherCode(item.values.weatherCode, item.startTime);
        return {...item, values: {...item.values, weatherCode: formattedWeatherCode } };
      });
      this.hourlyWeather = res;
      console.log('hourly', this.hourlyWeather);
    });

    // this.hourlyWeather = {
    //   data: {
    //     timelines: [
    //       {
    //         timestep: '1h',
    //         endTime: '2024-10-13T22:00:00Z',
    //         startTime: '2024-10-13T16:00:00Z',
    //         intervals: [
    //           {
    //             startTime: '2024-10-13T16:00:00Z',
    //             values: {
    //               temperature: 24.19,
    //               weatherCode: 10001,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-13T17:00:00Z',
    //             values: {
    //               temperature: 23.43,
    //               weatherCode: 10001,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-13T18:00:00Z',
    //             values: {
    //               temperature: 23.14,
    //               weatherCode: 11001,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-13T19:00:00Z',
    //             values: {
    //               temperature: 21.73,
    //               weatherCode: 11021,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-13T20:00:00Z',
    //             values: {
    //               temperature: 21.45,
    //               weatherCode: 11011,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-13T21:00:00Z',
    //             values: {
    //               temperature: 19.01,
    //               weatherCode: 11011,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-13T22:00:00Z',
    //             values: {
    //               temperature: 18.13,
    //               weatherCode: 10001,
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // };
  }
  getDailyWeather(location: string) {
    this.weatherService.get_DailyWeather(location).subscribe((res) => {
      this.dailyWeather = res;
      console.log('daily', this.dailyWeather);
    });

    // this.dailyWeather = {
    //   data: {
    //     timelines: [
    //       {
    //         timestep: '1d',
    //         endTime: '2024-10-18T10:00:00Z',
    //         startTime: '2024-10-13T10:00:00Z',
    //         intervals: [
    //           {
    //             startTime: '2024-10-13T10:00:00Z',
    //             values: {
    //               temperature: 11.48,
    //               weatherCode: 90001,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-14T10:00:00Z',
    //             values: {
    //               temperature: 17.22,
    //               weatherCode: 10001,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-15T10:00:00Z',
    //             values: {
    //               temperature: 12.92,
    //               weatherCode: 10001,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-16T10:00:00Z',
    //             values: {
    //               temperature: 11.92,
    //               weatherCode: 10001,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-17T10:00:00Z',
    //             values: {
    //               temperature: 11.9,
    //               weatherCode: 10001,
    //             },
    //           },
    //           {
    //             startTime: '2024-10-18T10:00:00Z',
    //             values: {
    //               temperature: 16.84,
    //               weatherCode: 10001,
    //             },
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // };
  }

   formatWeatherCode(weatherCode: number, time: string): number {
    const hours = new Date(time).getHours();
    if (hours >= 4 && hours < 18) {
      return weatherCode * 10;
    } else {
      return weatherCode * 10 + 1;
    }
  }
}
