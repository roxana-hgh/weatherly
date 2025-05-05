# Weatherly ☀️🌧️

**Weatherly** is a simple and elegant weather app built with **Angular**.  
It fetches real-time weather data based on a selected location and displays hourly and daily forecasts in a mobile-friendly layout.

## 🌐 Live Demo

🔗 [View the App](https://roxana-hgh.github.io/weatherly/)

## 🧰 Tech Stack

- Angular
- Bootstrap & ng-bootstrap
- Tomorrow.io API

## ✨ Features

- 🌍 Get current weather based on location
- 🕐 12-hour hourly forecast
- 📅 7-day daily forecast
- 🌡️ Detailed weather data:
  - Temperature
  - Feels like
  - Weather description
  - Wind speed
  - UV index
  - Humidity
  - Pressure

## 📱 UI Design

- Mobile-first responsive design
- Clean and minimal interface for better user experience

## 🚀 Getting Started

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/roxana-hgh/weatherly.git

# Navigate into the project directory
cd weatherly

# Install dependencies
npm install

# Run the development server
ng serve
```
Open http://localhost:4200 in your browser.

## 🔑 API Key ##
This project uses **Tomorrow.io** for weather data.
To run it locally, you’ll need to:

Sign up and get a free API key from Tomorrow.io.

Add your API key to the environment file:

```ts
// environment.ts
export const environment = {
  production: false,
  apiKey: 'YOUR_TOMORROW_IO_API_KEY'
};
```

## 📌 Notes ##
UI is optimized for mobile devices

Currently supports manual location entry

