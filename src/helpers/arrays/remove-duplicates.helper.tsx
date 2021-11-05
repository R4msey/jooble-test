export const removeDuplicates = (value: [] | string[]) => {
  return Array.from(new Set(value))
}
