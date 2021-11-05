export const deleteDayTime = (data: string) => {
  return new Date(data).toISOString().slice(0, 10)
}

export const dateToDay = (date: string) => {
  return new Date(date!).toLocaleString('en-us', {
    weekday: 'long',
  })
}
