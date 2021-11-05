import { PayloadAction } from '@reduxjs/toolkit'

export interface IWeather {
  date: string
  temp: number
}
type City = string

interface Weather {
  weather: IWeather[] | []
  quories: string[] | []
}
export interface IInitialState {
  city: string
  loading: boolean
  weather: IWeather[] | []
  quories: string[] | []
}

export type getCityPayloadActionType = PayloadAction<City>
export type getWeatherPayloadActionType = PayloadAction<Weather>
