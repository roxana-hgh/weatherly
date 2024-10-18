import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherForcastService {
  constructor(private http: HttpClient) {}

  private rootURL = 'https://api.tomorrow.io/v4';
  private forcastEndpoint = '/weather/forecast';
  private realtimeWeatherEndpoint = '/weather/realtime';
  private TimelineWeatherEndpoint = '/timelines';
  private apikey = '?apikey=35iUf9QxeY863gy7C2ipkRpPQSgSYlaK';

  get_WeatherForcast(
    location: string,
    units: string = 'metric',
    timesteps: string[]
  ) {
    return this.http.get<any>(
      this.rootURL +
        this.forcastEndpoint +
        this.apikey +
        `&location=${location}&units=${units}`
    );
  }

  get_RealtimeWeather(location: string, units: string = 'metric') {
    return this.http.get<any>(
      this.rootURL +
        this.realtimeWeatherEndpoint +
        this.apikey +
        `&location=${location}`
    );
  }

  get_HourlyWeather(location: string, units: string = 'metric') {

    const body = {
      location: location,
      fields: ['temperature', 'weatherCode', 'precipitationProbability'],
      units: units,
      timesteps: ['1h'],
      startTime: 'now',
      endTime: 'nowPlus12h',
      timezone: 'auto',
    };
    return this.http.post<any>(
      this.rootURL + this.TimelineWeatherEndpoint + this.apikey,
      body
    );
  }

  get_DailyWeather(location: string, units: string = 'metric') {
  
    const body = {
      location: location,
      fields: ['temperature', 'weatherCodeDay', 'weatherCodeNight', 'precipitationProbability'],
      units: units,
      timesteps: ['1d'],
      startTime: 'now',
      endTime: 'nowPlus5d',
      timezone: 'auto',
    };
    return this.http.post<any>(
      this.rootURL + this.TimelineWeatherEndpoint + this.apikey,
      body
    );
  }
}
