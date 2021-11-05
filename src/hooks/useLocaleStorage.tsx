export const useLocaleStorage = (
  nameStorage: string,
  value?: object,
  actions?: Function | undefined
) => {
  const storage: string | null = localStorage.getItem(nameStorage)

  const setStorage = (value: object) => {
    localStorage.setItem(nameStorage, JSON.stringify(value))
  }

  if (!storage) return setStorage([value])

  actions!(setStorage, storage, value)

  const getStorage = JSON.parse(localStorage.getItem(nameStorage) || '')

  return getStorage
}
