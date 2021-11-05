import { dateToDay, deleteDayTime } from '../helpers/date/parse-date.helper'
import { findArithmeticMean } from '../helpers/numbers/find-arithmetic-mean.helper'

export const useSortWeatherByDays = (data: {
  list: { dt_txt: string; main: { temp: number } }[]
}) => {
  const count: any = {}

  data.list.forEach((i: { dt_txt: string; main: { temp: number } }) =>
    count[deleteDayTime(i.dt_txt)]
      ? count[deleteDayTime(i.dt_txt)].push({
          ...{ date: i.dt_txt, temp: i.main.temp },
        })
      : {
          ...(count[deleteDayTime(i.dt_txt)] = [
            { date: i.dt_txt, temp: i.main.temp },
          ]),
        }
  )
  const weather = Object.keys(count).map((i) => {
    return {
      temp: findArithmeticMean(count[i]),
      date: dateToDay(i),
    }
  })

  return weather
}
