import React from 'react';
import styled from 'styled-components'

import { WeatherProvider } from './contexts/Weather'

import CurrentWeather from './components/CurrentWeather'

const StyledApp = styled.div`
  font-family: sans-serif;
`

function App() {
  return (
    <StyledApp>
      <WeatherProvider>
        <h1>
          This is your new tab
        </h1>
        <CurrentWeather/>
      </WeatherProvider>
    </StyledApp>
  );
}


export default App;
