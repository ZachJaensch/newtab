import React from 'react'
import LargeWeather from 'components/LargeWeather'
import { useWeather } from 'contexts/Weather'

export default function CurrentWeather() {

  const weather = useWeather()

  if(weather.loading) return null

  const { current: {  main: { temp }, weather: { 0: { description, id}} } } = weather

  return (
    <LargeWeather
      description={description}
      iconId={id}
      temp={temp}
    />
  )
}
