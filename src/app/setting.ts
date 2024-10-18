export class Settings {
  public static weatherCode: { [key: string]: WeatherStatus } = {
    '10000': {
      title: 'Clear, Sunny',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/10000_clear_large.png',
    },
    '10001': {
      title: 'Clear',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/10001_clear_large.png',
    },
    '10010': {
      title: 'Cloudy',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/10010_cloudy_large.png',
    },
    '10011': {
      title: 'Cloudy',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/10010_cloudy_large.png',
    },
    '11000': {
      title: 'Mostly Clear',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11000_mostly_clear_large.png',
    },
    '11001': {
      title: 'Mostly Clear',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11001_mostly_clear_large.png',
    },
    '11010': {
      title: 'Partly Cloudy',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11010_partly_cloudy_large.png',
    },
    '11011': {
      title: 'Partly Cloudy',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11011_partly_cloudy_large.png',
    },
    '11020': {
      title: 'Mostly Cloudy',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11020_mostly_cloudy_large.png',
    },
    '11021': {
      title: 'Mostly Cloudy',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11021_mostly_cloudy_large.png',
    },
    '11030': {
      title: 'Partly Cloudy and Mostly Clear',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11030_mostly_clear_large.png',
    },
    '11031': {
      title: 'Partly Cloudy and Mostly Clear',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11031_mostly_clear_large.png',
    },
    '20000': {
      title: 'Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/20000_fog_large.png',
    },
    '20001': {
        title: 'Fog',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/20000_fog_large.png',
      },
    '21000': {
      title: 'Light Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21000_fog_light_large.png',
    },
    '21001': {
      title: 'Light Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21000_fog_light_large.png',
    },
    '21010': {
      title: 'Mostly Clear and Light Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21010_fog_light_mostly_clear_large.png',
    },
    '21011': {
      title: 'Mostly Clear and Light Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21011_fog_light_mostly_clear_large.png',
    },
    '21020': {
      title: 'Partly Cloudy and Light Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21020_fog_light_partly_cloudy_large.png',
    },
    '21021': {
      title: 'Partly Cloudy and Light Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21021_fog_light_partly_cloudy_large.png',
    },
    '21030': {
      title: 'Mostly Cloudy and Light Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21030_fog_light_mostly_cloudy_large.png',
    },
    '21031': {
      title: 'Mostly Cloudy and Light Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21031_fog_light_mostly_cloudy_large.png',
    },
    '21060': {
      title: 'Mostly Clear and Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21060_fog_mostly_clear_large.png',
    },
    '21061': {
      title: 'Mostly Clear and Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21061_fog_mostly_clear_large.png',
    },
    '21070': {
      title: 'Partly Cloudy and Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21070_fog_partly_cloudy_large.png',
    },
    '21071': {
      title: 'Partly Cloudy and Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21071_fog_partly_cloudy_large.png',
    },
    '21080': {
      title: 'Mostly Cloudy and Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21080_fog_mostly_cloudy_large.png',
    },
    '21081': {
      title: 'Mostly Cloudy and Fog',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21081_fog_mostly_cloudy_large.png',
    },
    '40000': {
      title: 'Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/40000_drizzle_large.png',
    },
    '40001': {
      title: 'Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/40000_drizzle_large.png',
    },
    '40010': {
      title: 'Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/40010_rain_large.png',
    },
    '40011': {
      title: 'Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/40010_rain_large.png',
    },
    '42000': {
      title: 'Light Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42000_rain_light_large.png',
    },
    '42001': {
      title: 'Light Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42000_rain_light_large.png',
    },
    '42010': {
      title: 'Heavy Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42010_rain_heavy_large.png',
    },
    '42011': {
      title: 'Heavy Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42010_rain_heavy_large.png',
    },
    '42020': {
      title: 'Partly Cloudy and Heavy Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42020_rain_heavy_partly_cloudy_large.png',
    },
    '42021': {
      title: 'Partly Cloudy and Heavy Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42021_rain_heavy_partly_cloudy_large.png',
    },
    '42030': {
      title: 'Mostly Clear and Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42030_drizzle_mostly_clear_large.png',
    },
    '42031': {
      title: 'Mostly Clear and Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42031_drizzle_mostly_clear_large.png',
    },
    '42040': {
      title: 'Partly Cloudy and Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42040_drizzle_partly_cloudy_large.png',
    },
    '42041': {
      title: 'Partly Cloudy and Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42041_drizzle_partly_cloudy_large.png',
    },
    '42050': {
      title: 'Mostly Cloudy and Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42050_drizzle_mostly_cloudy_large.png',
    },
    '42051': {
      title: 'Mostly Cloudy and Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42051_drizzle_mostly_cloudy_large.png',
    },
    '42080': {
      title: 'Partly Cloudy and Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42080_rain_partly_cloudy_large.png',
    },
    '42081': {
      title: 'Partly Cloudy and Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42081_rain_partly_cloudy_large.png',
    },
    '42090': {
      title: 'Mostly Clear and Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42090_rain_mostly_clear_large.png',
    },
    '42091': {
      title: 'Mostly Clear and Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42091_rain_mostly_clear_large.png',
    },
    '42100': {
      title: 'Mostly Cloudy and Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42100_rain_mostly_cloudy_large.png',
    },
    '42101': {
      title: 'Mostly Cloudy and Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42101_rain_mostly_cloudy_large.png',
    },
    '42110': {
      title: 'Mostly Clear and Heavy Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42110_rain_heavy_mostly_clear_large.png',
    },
    '42111': {
      title: 'Mostly Clear and Heavy Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42111_rain_heavy_mostly_clear_large.png',
    },
    '42120': {
      title: 'Mostly Cloudy and Heavy Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42120_rain_heavy_mostly_cloudy_large.png',
    },
    '42121': {
      title: 'Mostly Cloudy and Heavy Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42121_rain_heavy_mostly_cloudy_large.png',
    },
    '42130': {
      title: 'Mostly Clear and Light Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42130_rain_light_mostly_clear_large.png',
    },
    '42131': {
      title: 'Mostly Clear and Light Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42131_rain_light_mostly_clear_large.png',
    },
    '42140': {
      title: 'Partly Cloudy and Light Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42140_rain_light_partly_cloudy_large.png',
    },
    '42141': {
      title: 'Partly Cloudy and Light Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42141_rain_light_partly_cloudy_large.png',
    },
    '42150': {
      title: 'Mostly Cloudy and Light Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42150_rain_light_mostly_cloudy_large.png',
    },
    '42151': {
      title: 'Mostly Cloudy and Light Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42151_rain_light_mostly_cloudy_large.png',
    },
    '50000': {
      title: 'Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/50000_snow_large.png',
    },
    '50001': {
      title: 'Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/50000_snow_large.png',
    },
    '50010': {
      title: 'Flurries',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/50010_flurries_large.png',
    },
    '50011': {
      title: 'Flurries',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/50010_flurries_large.png',
    },
    '51000': {
      title: 'Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51000_snow_light_large.png',
    },
    '51001': {
      title: 'Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51000_snow_light_large.png',
    },
    '51010': {
      title: 'Heavy Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51010_snow_heavy_large.png',
    },
    '51011': {
      title: 'Heavy Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51010_snow_heavy_large.png',
    },
    '51020': {
      title: 'Mostly Clear and Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51020_snow_light_mostly_clear_large.png',
    },
    '51021': {
      title: 'Mostly Clear and Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51021_snow_light_mostly_clear_large.png',
    },
    '51030': {
      title: 'Partly Cloudy and Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51030_snow_light_partly_cloudy_large.png',
    },
    '51031': {
      title: 'Partly Cloudy and Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51031_snow_light_partly_cloudy_large.png',
    },
    '51040': {
      title: 'Mostly Cloudy and Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51040_snow_light_mostly_cloudy_large.png',
    },
    '51041': {
      title: 'Mostly Cloudy and Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51041_snow_light_mostly_cloudy_large.png',
    },
    '51050': {
      title: 'Mostly Clear and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51050_snow_mostly_clear_large.png',
    },
    '51051': {
      title: 'Mostly Clear and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51051_snow_mostly_clear_large.png',
    },
    '51060': {
      title: 'Partly Cloudy and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51060_snow_partly_cloudy_large.png',
    },
    '51061': {
      title: 'Partly Cloudy and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51061_snow_partly_cloudy_large.png',
    },
    '51070': {
      title: 'Mostly Cloudy and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51070_snow_mostly_cloudy_large.png',
    },
    '51071': {
      title: 'Mostly Cloudy and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51071_snow_mostly_cloudy_large.png',
    },
    '51080': {
      title: 'Rain and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51080_wintry_mix_large.png',
    },
    '51081': {
      title: 'Rain and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51080_wintry_mix_large.png',
    },
    '51100': {
      title: 'Drizzle and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51100_wintry_mix_large.png',
    },
    '51101': {
      title: 'Drizzle and Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51100_wintry_mix_large.png',
    },
    '51120': {
      title: 'Snow and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51120_wintry_mix_large.png',
    },
    '51121': {
      title: 'Snow and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51120_wintry_mix_large.png',
    },
    '51140': {
      title: 'Snow and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51140_wintry_mix_large.png',
    },
    '51141': {
      title: 'Snow and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51140_wintry_mix_large.png',
    },
    '51150': {
      title: 'Mostly Clear and Flurries',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51150_flurries_mostly_clear_large.png',
    },
    '51151': {
      title: 'Mostly Clear and Flurries',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51151_flurries_mostly_clear_large.png',
    },
    '51160': {
      title: 'Partly Cloudy and Flurries',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51160_flurries_partly_cloudy_large.png',
    },
    '51161': {
      title: 'Partly Cloudy and Flurries',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51161_flurries_partly_cloudy_large.png',
    },
    '51170': {
      title: 'Mostly Cloudy and Flurries',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51170_flurries_mostly_cloudy_large.png',
    },
    '51171': {
      title: 'Mostly Cloudy and Flurries',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51171_flurries_mostly_cloudy_large.png',
    },
    '51190': {
      title: 'Mostly Clear and Heavy Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51190_snow_heavy_mostly_clear_large.png',
    },
    '51191': {
      title: 'Mostly Clear and Heavy Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51191_snow_heavy_mostly_clear_large.png',
    },
    '51200': {
      title: 'Partly Cloudy and Heavy Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51200_snow_heavy_partly_cloudy_large.png',
    },
    '51201': {
      title: 'Partly Cloudy and Heavy Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51201_snow_heavy_partly_cloudy_large.png',
    },
    '51210': {
      title: 'Mostly Cloudy and Heavy Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51210_snow_heavy_mostly_cloudy_large.png',
    },
    '51211': {
      title: 'Mostly Cloudy and Heavy Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51211_snow_heavy_mostly_cloudy_large.png',
    },
    '51220': {
      title: 'Drizzle and Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51220_wintry_mix_large.png',
    },
    '51221': {
      title: 'Drizzle and Light Snow',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51220_wintry_mix_large.png',
    },
    '60000': {
      title: 'Freezing Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60000_freezing_rain_drizzle_large.png',
    },
    '60001': {
        title: 'Freezing Drizzle',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60000_freezing_rain_drizzle_large.png',
      },
    '60010': {
      title: 'Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60010_freezing_rain_large.png',
    },
    '60011': {
      title: 'Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60010_freezing_rain_large.png',
    },
    '60020': {
      title: 'Partly Cloudy and Freezing drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60020_freezing_rain_drizzle_partly_cloudy_large.png',
    },
    '60021': {
      title: 'Partly Cloudy and Freezing drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60021_freezing_rain_drizzle_partly_cloudy_large.png',
    },
    '60030': {
      title: 'Mostly Clear and Freezing drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60030_freezing_rain_drizzle_mostly_clear_large.png',
    },
    '60031': {
      title: 'Mostly Clear and Freezing drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60031_freezing_rain_drizzle_mostly_clear_large.png',
    },
    '60040': {
      title: 'Mostly Cloudy and Freezing drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60040_freezing_rain_drizzle_mostly_cloudy_large.png',
    },
    '60041': {
      title: 'Mostly Cloudy and Freezing drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60041_freezing_rain_drizzle_mostly_cloudy_large.png',
    },
    '62000': {
      title: 'Light Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62000_freezing_rain_light_large.png',
    },
    '62001': {
        title: 'Light Freezing Rain',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62000_freezing_rain_light_large.png',
      },
    '62010': {
      title: 'Heavy Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62010_freezing_rain_heavy_large.png',
    },
    '62011': {
        title: 'Heavy Freezing Rain',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62010_freezing_rain_heavy_large.png',
      },
    '62020': {
      title: 'Partly Cloudy and Heavy Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62020_freezing_rain_heavy_partly_cloudy_large.png',
    },
    '62021': {
      title: 'Partly Cloudy and Heavy Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62021_freezing_rain_heavy_partly_cloudy_large.png',
    },
    '62030': {
      title: 'Partly Cloudy and Light Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62030_freezing_rain_light_partly_cloudy_large.png',
    },
    '62031': {
      title: 'Partly cloudy and Light Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62031_freezing_rain_light_partly_cloudy_large.png',
    },
    '62040': {
      title: 'Drizzle and Freezing Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62040_wintry_mix_large.png',
    },
    '62041': {
      title: 'Drizzle and Freezing Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62040_wintry_mix_large.png',
    },
    '62050': {
      title: 'Mostly Clear and Light Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62050_freezing_rain_light_mostly_clear_large.png',
    },
    '62051': {
      title: 'Mostly Clear and Light Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62051_freezing_rain_light_mostly_clear_large.png',
    },
    '62060': {
      title: 'Light Rain and Freezing Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62060_wintry_mix_large.png',
    },
    '62061': {
      title: 'Light Rain and Freezing Drizzle',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62060_wintry_mix_large.png',
    },
    '62070': {
      title: 'Mostly Clear and Heavy Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62070_freezing_rain_heavy_mostly_clear_large.png',
    },
    '62071': {
      title: 'Mostly Clear and Heavy Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62071_freezing_rain_heavy_mostly_clear_large.png',
    },
    '62080': {
      title: 'Mostly Cloudy and Heavy Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62080_freezing_rain_heavy_mostly_cloudy_large.png',
    },
    '62081': {
      title: 'Mostly Cloudy and Heavy Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62081_freezing_rain_heavy_mostly_cloudy_large.png',
    },
    '62090': {
      title: 'Mostly Cloudy and Light Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62090_freezing_rain_light_mostly_cloudy_large.png',
    },
    '62091': {
      title: 'Mostly Cloudy and Light Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62091_freezing_rain_light_mostly_cloudy_large.png',
    },
    '62120': {
      title: 'Drizzle and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62120_wintry_mix_large.png',
    },
    '62121': {
        title: 'Drizzle and Freezing Rain',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62120_wintry_mix_large.png',
      },
    '62130': {
      title: 'Mostly Clear and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62130_freezing_rain_mostly_clear_large.png',
    },
    '62131': {
      title: 'Mostly Clear and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62131_freezing_rain_mostly_clear_large.png',
    },
    '62140': {
      title: 'Partly Cloudy and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62140_freezing_rain_partly_cloudy_large.png',
    },
    '62141': {
      title: 'Partly Cloudy and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62141_freezing_rain_partly_cloudy_large.png',
    },
    '62150': {
      title: 'Mostly Cloudy and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62150_freezing_rain_mostly_cloudy_large.png',
    },
    '62151': {
      title: 'Mostly Cloudy and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62151_freezing_rain_mostly_cloudy_large.png',
    },
    '62200': {
      title: 'Light Rain and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62200_wintry_mix_large.png',
    },
    '62201': {
        title: 'Light Rain and Freezing Rain',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62200_wintry_mix_large.png',
      },
    '62220': {
      title: 'Rain and Freezing Rain',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62220_wintry_mix_large.png',
    },
    '62221': {
        title: 'Rain and Freezing Rain',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62220_wintry_mix_large.png',
      },
    '70000': {
      title: 'Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/70000_ice_pellets_large.png',
    },
    '70001': {
      title: 'Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/70000_ice_pellets_large.png',
    },
    '71010': {
      title: 'Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71010_ice_pellets_heavy_large.png',
    },
    '71011': {
      title: 'Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71010_ice_pellets_heavy_large.png',
    },
    '71020': {
      title: 'Light Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71020_ice_pellets_light_large.png',
    },
    '71021': {
      title: 'Light Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71020_ice_pellets_light_large.png',
    },
    '71030': {
      title: 'Freezing Rain and Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71030_wintry_mix_large.png',
    },
    '71031': {
      title: 'Freezing Rain and Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71030_wintry_mix_large.png',
    },
    '71050': {
      title: 'Drizzle and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71050_wintry_mix_large.png',
    },
    '71051': {
      title: 'Drizzle and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71050_wintry_mix_large.png',
    },
    '71060': {
      title: 'Freezing Rain and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71060_wintry_mix_large.png',
    },
    '71061': {
      title: 'Freezing Rain and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71060_wintry_mix_large.png',
    },
    '71070': {
      title: 'Partly Cloudy and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71070_ice_pellets_partly_cloudy_large.png',
    },
    '71071': {
      title: 'Partly Cloudy and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71071_ice_pellets_partly_cloudy_large.png',
    },
    '71080': {
      title: 'Mostly Clear and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71080_ice_pellets_mostly_clear_large.png',
    },
    '71081': {
      title: 'Mostly Clear and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71081_ice_pellets_mostly_clear_large.png',
    },
    '71090': {
      title: 'Mostly Cloudy and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71090_ice_pellets_mostly_cloudy_large.png',
    },
    '71091': {
      title: 'Mostly Cloudy and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71091_ice_pellets_mostly_cloudy_large.png',
    },
    '71100': {
      title: 'Mostly Clear and Light Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71100_ice_pellets_light_mostly_clear_large.png',
    },
    '71101': {
      title: 'Mostly Clear and Light Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71101_ice_pellets_light_mostly_clear_large.png',
    },
    '71110': {
      title: 'Partly Cloudy and Light Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71110_ice_pellets_light_partly_cloudy_large.png',
    },
    '71111': {
      title: 'Partly Cloudy and Light Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71111_ice_pellets_light_partly_cloudy_large.png',
    },
    '71120': {
      title: 'Mostly Cloudy and Light Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71120_ice_pellets_light_mostly_cloudy_large.png',
    },
    '71121': {
      title: 'Mostly Cloudy and Light Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71121_ice_pellets_light_mostly_cloudy_large.png',
    },
    '71130': {
      title: 'Mostly Clear and Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71130_ice_pellets_heavy_mostly_clear_large.png',
    },
    '71131': {
      title: 'Mostly Clear and Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71131_ice_pellets_heavy_mostly_clear_large.png',
    },
    '71140': {
      title: 'Partly Cloudy and Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71140_ice_pellets_heavy_partly_cloudy_large.png',
    },
    '71141': {
      title: 'Partly Cloudy and Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71141_ice_pellets_heavy_partly_cloudy_large.png',
    },
    '71150': {
      title: 'Light Rain and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71150_wintry_mix_large.png',
    },
    '71151': {
        title: 'Light Rain and Ice Pellets',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71150_wintry_mix_large.png',
      },
    '71160': {
      title: 'Mostly Cloudy and Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71160_ice_pellets_heavy_mostly_cloudy_large.png',
    },
    '71161': {
      title: 'Mostly Cloudy and Heavy Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71161_ice_pellets_heavy_mostly_cloudy_large.png',
    },
    '71170': {
      title: 'Rain and Ice Pellets',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71170_wintry_mix_large.png',
    },
    '71171': {
        title: 'Rain and Ice Pellets',
        icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71170_wintry_mix_large.png',
      },
    '80000': {
      title: 'Thunderstorm',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80000_tstorm_large.png',
    },
    '80001': {
      title: 'Thunderstorm',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80000_tstorm_large.png',
    },
    '80010': {
      title: 'Mostly Clear and Thunderstorm',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80010_tstorm_mostly_clear_large.png',
    },
    '80011': {
      title: 'Mostly Clear and Thunderstorm',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80011_tstorm_mostly_clear_large.png',
    },
    '80020': {
      title: 'Mostly Cloudy and Thunderstorm',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80020_tstorm_mostly_cloudy_large.png',
    },
    '80021': {
      title: 'Mostly Cloudy and Thunderstorm',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80021_tstorm_mostly_cloudy_large.png',
    },
    '80030': {
      title: 'Partly Cloudy and Thunderstorm',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80030_tstorm_partly_cloudy_large.png',
    },
    '80031': {
      title: 'Partly Cloudy and Thunderstorm',
      icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80031_tstorm_partly_cloudy_large.png',
    },
  };

  // {
  //     '0': { title: 'Unknown', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/0_unknown_large@2x.png' },
  //     '1000': { title: 'Clear, Sunny', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/10000_clear_large@2x.png' },
  //     '1100': { title: 'Mostly Clear', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11000_mostly_clear_large@2x.png' },
  //     '1101': { title: 'Partly Cloudy', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11010_partly_cloudy_large@2x.png' },
  //     '1102': { title: 'Mostly Cloudy', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/11020_mostly_cloudy_large@2x.png' },
  //     '1001': { title: 'Cloudy', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/10010_cloudy_large@2x.png' },
  //     '2000': { title: 'Fog', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/20000_fog_large@2x.png' },
  //     '2100': { title: 'Light Fog', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/21000_fog_light_large@2x.png' },
  //     '4000': { title: 'Drizzle', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/40000_drizzle_large@2x.png' },
  //     '4001': { title: 'Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/40010_rain_large@2x.png' },
  //     '4200': { title: 'Light Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42000_rain_light_large@2x.png' },
  //     '4201': { title: 'Heavy Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/42010_heavy_rain_large@2x.png' },
  //     '5000': { title: 'Snow', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/50000_snow_large@2x.png' },
  //     '5001': { title: 'Flurries', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/50010_flurries_large@2x.png' },
  //     '5100': { title: 'Light Snow', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51000_light_snow_large@2x.png' },
  //     '5101': { title: 'Heavy Snow', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/51010_heavy_snow_large@2x.png' },
  //     '6000': { title: 'Freezing Drizzle', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60000_freezing_drizzle_large@2x.png' },
  //     '6001': { title: 'Freezing Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/60010_freezing_rain_large@2x.png' },
  //     '6200': { title: 'Light Freezing Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62000_light_freezing_rain_large@2x.png' },
  //     '6201': { title: 'Heavy Freezing Rain', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/62010_heavy_freezing_rain_large@2x.png' },
  //     '7000': { title: 'Ice Pellets', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/70000_ice_pellets_large@2x.png' },
  //     '7101': { title: 'Heavy Ice Pellets', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71010_heavy_ice_pellets_large@2x.png' },
  //     '7102': { title: 'Light Ice Pellets', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/71020_light_ice_pellets_large@2x.png' },
  //     '8000': { title: 'Thunderstorm', icon: 'https://raw.githubusercontent.com/Tomorrow-IO-API/tomorrow-weather-codes/refs/heads/master/V2_icons/large/png/80000_thunderstorm_large@2x.png' }
  // };
}

interface WeatherStatus {
  title: string;
  icon: string;
}
