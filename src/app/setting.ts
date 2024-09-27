interface WeatherStatus {
    title: string;
    icon: string;
  }

export class Settings {
    public static weatherCode: { [key: string]: WeatherStatus } =  {
        '1000': { title: 'Clear or sunny', icon: 'assets/images/weather-status/sunny.png' },
        '1001': { title: 'Cloudy', icon: 'assets/images/weather-status/cloudy.png' },
        '1100': { title: 'Mostly clear', icon: 'assets/images/weather-status/partly-cloudy.png' },
        '1101': { title: 'Partly cloudy', icon: 'assets/images/weather-status/partly-cloudy.png' },
        '1102': { title: 'Mostly cloudy', icon: 'assets/images/weather-status/cloudy.png' },
        '2000': { title: 'Foggy', icon: 'assets/images/weather-status/foggy.png' },
        '3000': { title: 'Light wind', icon: 'assets/images/weather-status/Light-wind.png' },
        '4000': { title: 'Drizzle', icon: 'assets/images/weather-status/drizzle.png' },
        '5000': { title: 'Snow', icon: 'assets/images/weather-status/snow.png' },
        '6000': { title: 'Freezing rain', icon: 'assets/images/weather-status/Freezing-rain.png' },
        '7000': { title: 'Thunderstorms', icon: 'assets/images/weather-status/Thunderstorms.png' },
        '8000': { title: 'Tornado', icon: 'assets/images/weather-status/tornado.png' },
        '8001': { title: 'Windy', icon: 'assets/images/weather-status/windy.png' }  
    }
}


