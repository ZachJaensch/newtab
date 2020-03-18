import weather from 'openweather-apis'
import React, { createContext, useState, useContext } from 'react'

const WeatherContext = createContext({})

export function WeatherProvider({children}) {
  const [lastRequestAt, setRequestAt] = useState()
  const [current, setCurrent] = useState()
  const [forecast, setForecast] = useState()
  const loading = !Boolean(current && forecast)
  weather.setAPPID('6f378c4499ec0aa918ffb981686ebad4')
  weather.setCityId('2151157')
  weather.setUnits('metric')
  weather.setLang('en')

  if(!lastRequestAt) {
    setRequestAt(new Date())
    weather.getAllWeather((e, v) => { setCurrent(v) })
    weather.getWeatherForecast((e, v) => { setForecast(v) })
  }

  const value = {
    lastRequestAt,
    current,
    forecast,
    loading
  }

  if(!loading) console.log(value)

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeather() {
  return useContext(WeatherContext)
}
