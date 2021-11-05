import { Http } from '../common/enums/http/http-enums'

import { useFetch } from '../hooks/useFetch'

const { REACT_APP_WEATHER_API_KEY } = process.env

type WeatherApi = (city?: string) => Promise<any>

export const WeatherApi: WeatherApi = (city?: string) => {
  const result = useFetch(
    `${Http.WeatherBaseURL}data/2.5/forecast?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}`
  )
  return result
}
