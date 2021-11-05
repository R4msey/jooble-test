import { createAsyncThunk } from '@reduxjs/toolkit'

import { WeatherApi } from '../../api/weather.api'

import { addingiItemsToStorage } from '../../helpers/localeStorage/locale-storage.helper'

import { useLocaleStorage } from '../../hooks/useLocaleStorage'
import { useSortWeatherByDays } from '../../hooks/useSortWeatherByDays'

export const getWeather = createAsyncThunk('', async (_, thunk) => {
  const state: any = thunk.getState()
  const { city } = state.app

  const response = await WeatherApi(city)

  if (response.cod !== '200') throw 'not found'

  const quories = useLocaleStorage('quories', city, addingiItemsToStorage)

  const weather = useSortWeatherByDays(response)

  return { weather, quories }
})
