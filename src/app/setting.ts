export class Settings {
    public static weatherCode: { [key: string]: WeatherStatus } = {
        '0': { title: 'Unknown', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/0_unknown_large@2x.png' },
        '1000': { title: 'Clear, Sunny', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/10000_clear_large@2x.png' },
        '1100': { title: 'Mostly Clear', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11000_mostly_clear_large@2x.png' },
        '1101': { title: 'Partly Cloudy', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11010_partly_cloudy_large@2x.png' },
        '1102': { title: 'Mostly Cloudy', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/1102_mostly_cloudy_large@2x.png' },
        '1001': { title: 'Cloudy', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/10010_cloudy_large@2x.png' },
        '2000': { title: 'Fog', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/20000_fog_large@2x.png' },
        '2100': { title: 'Light Fog', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21000_light_fog_large@2x.png' },
        '4000': { title: 'Drizzle', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/40000_drizzle_large@2x.png' },
        '4001': { title: 'Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/40010_rain_large@2x.png' },
        '4200': { title: 'Light Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42000_light_rain_large@2x.png' },
        '4201': { title: 'Heavy Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42010_heavy_rain_large@2x.png' },
        '5000': { title: 'Snow', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/50000_snow_large@2x.png' },
        '5001': { title: 'Flurries', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/50010_flurries_large@2x.png' },
        '5100': { title: 'Light Snow', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51000_light_snow_large@2x.png' },
        '5101': { title: 'Heavy Snow', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51010_heavy_snow_large@2x.png' },
        '6000': { title: 'Freezing Drizzle', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60000_freezing_drizzle_large@2x.png' },
        '6001': { title: 'Freezing Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60010_freezing_rain_large@2x.png' },
        '6200': { title: 'Light Freezing Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62000_light_freezing_rain_large@2x.png' },
        '6201': { title: 'Heavy Freezing Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62010_heavy_freezing_rain_large@2x.png' },
        '7000': { title: 'Ice Pellets', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/70000_ice_pellets_large@2x.png' },
        '7101': { title: 'Heavy Ice Pellets', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71010_heavy_ice_pellets_large@2x.png' },
        '7102': { title: 'Light Ice Pellets', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71020_light_ice_pellets_large@2x.png' },
        '8000': { title: 'Thunderstorm', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80000_thunderstorm_large@2x.png' }
    };
}

interface WeatherStatus {
    title: string;
    icon: string;
}
