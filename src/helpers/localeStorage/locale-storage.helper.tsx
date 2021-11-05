import { removeDuplicates } from '../arrays/remove-duplicates.helper'
import { capitalize } from '../arrays/capitalize.helper'

export const addingiItemsToStorage = (
  setStorage: (value: string[]) => void,
  storage: string,
  value: string
) => {
  if (JSON.parse(storage)[0] === value) return

  let newStorage: string[] | string = [value].concat(JSON.parse(storage))

  newStorage = removeDuplicates(capitalize(newStorage))

  if (newStorage.length > 10) {
    newStorage.pop()
    return setStorage(newStorage)
  }

  setStorage(newStorage)
}
