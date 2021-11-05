import { substractKelvin } from '../numbers/subtract-kelvin.helper'

export const headerTitle = (city: string, data: { temp: number }[]) => {
  const title = data.length
    ? `${city} (today): ${substractKelvin(data[0].temp).celsius}`
    : 'Not found'
  return title
}
