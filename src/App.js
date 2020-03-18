import React from 'react';

import { WeatherProvider } from './contexts/Weather'

import CurrentWeather from './components/CurrentWeather'


function App() {
  return (
    <WeatherProvider>
      <div>
        <h1>
          This is your new tab
        </h1>
        <CurrentWeather/>
      </div>
    </WeatherProvider>

  );
}

export default App;
