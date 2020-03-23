import React from 'react'
import LargeWeather from 'components/LargeWeather'
import { useWeather } from 'contexts/Weather'

export default function CurrentWeather() {

  const weather = useWeather()

  if(weather.loading) return null

  const { currently: { temperature, icon, summary } } = weather

  return (
    <LargeWeather
      description={summary}
      iconId={icon}
      temp={temperature}
    />
  )
}
