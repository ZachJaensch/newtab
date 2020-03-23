// import weather from 'openweather-apis'
import React, { createContext, useState, useContext } from 'react'
import DarkSkyApi from 'dark-sky-api'


const WeatherContext = createContext({})

const apiKey = 'bae6145230bd4a71c22b172f95bb36e1'
const latitude = '-33.7715'
const longitude = '150.8438'
const units = 'si'
const language = 'en'

const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const darkSkyUrl = `https://api.darksky.net/forecast/${apiKey}/`


export function WeatherProvider({children}) {
  const [lastRequestAt, setRequestAt] = useState()
  const [currently, setCurrently] = useState()
  const [hourly, setHourly] = useState()
  const [daily, setDaily] = useState()
  const [alerts, setAlerts] = useState()
  const [loading, setLoading] = useState(true)

  const api = new DarkSkyApi(false, corsAnywhere + darkSkyUrl, units, language);

  if(!lastRequestAt) {
    setRequestAt(new Date())
    api.loadItAll().then(res => {
      setCurrently(res.currently)
      setHourly(res.hourly)
      setDaily(res.daily)
      setAlerts(res.alerts)
      setLoading(false)
    })
  }

  const value = {
    lastRequestAt,
    currently,
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

