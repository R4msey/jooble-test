import { createSlice } from '@reduxjs/toolkit'

import { getWeather } from './thunks'

import {
  getCityPayloadActionType,
  getWeatherPayloadActionType,
  IInitialState,
} from './types'

const initialState: IInitialState = {
  city: 'Kyiv',
  quories: [],
  loading: true,
  weather: [],
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getCity: (state, action: getCityPayloadActionType) => {
      state.city = action.payload
      state.loading = true
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getWeather.fulfilled,
      (state, action: getWeatherPayloadActionType) => {
        state.weather = action.payload.weather
        state.quories = action.payload.quories
        state.loading = false
      }
    )
    builder.addCase(getWeather.rejected, (state, action) => {
      state.loading = true
      state.weather = []
    })
    builder.addCase(getWeather.pending, (state, action) => {
      state.loading = true
    })
  },
})

export const { getCity } = appSlice.actions

export default appSlice.reducer
