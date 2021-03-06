import React from 'react'
import WeatherIcon from 'components/WeatherIcon'
import styled from 'styled-components'
import theme from 'components/theme'
import capitalize from 'capitalize'

const Display = styled.div`
  display: flex;
  flex-direction: row;
  margin: ${theme.gutter};
`

const Icon = styled.span`
  display: flex;
  font-size: 3rem;
  margin: ${theme.gutter};
  padding-top: 0.5rem;
`

const Text = styled.span`
    display: flex;
    flex-direction: column;
    padding: ${theme.gutter};
`

const P = styled.p`
  margin: 0;
`

const Large = styled(P)`
  font-size: 2rem;
`

const Small = styled(P)`
  font-size: 1rem;
`



export default function LargeWeather({ description, iconId, temp }) {
  return (
    <Display>
      <Icon>
        <WeatherIcon iconId={iconId} />
      </Icon>
      <Text>
        <Large>
          {Math.round(temp)} &#8451;
        </Large>
        <Small>
          {capitalize(description)}
        </Small>
      </Text>
    </Display>
  )
}
