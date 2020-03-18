import React from 'react';
import styled from 'styled-components'

import { WeatherProvider } from './contexts/Weather'

import CurrentWeather from './components/CurrentWeather'

const StyledApp = styled.div`
  font-family: sans-serif;
  color: lightgray;
`

const Background = styled.div`
  background-image: url(background.jpg);
  background-size: 100vw 100%; 
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`

function App() {
  return (
    <StyledApp>
      <Background />
      <WeatherProvider>
        <CurrentWeather/>
      </WeatherProvider>
    </StyledApp>
  );
}


export default App;
