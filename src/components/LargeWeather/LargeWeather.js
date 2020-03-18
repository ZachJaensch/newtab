import React from 'react'
import WeatherIcon from 'components/WeatherIcon'

export default function LargeWeather({ description, iconId, temp }) {
  return (
    <div>
      <span>
        <WeatherIcon iconId={iconId} />
      </span>
      <span>
        <p>
          {temp} deg C
        </p>
        <p>
          {description}
        </p>
      </span>
    </div>
  )
}
