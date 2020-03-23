import React from 'react'
import WeatherIcon from 'react-icons-weather'

export default function WeatherIconDisplay({iconId}) {
  return <WeatherIcon name="darksky" iconId={String(iconId)}/>
}
