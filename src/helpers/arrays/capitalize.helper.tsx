export const capitalize = (arr: string[]) => {
  return arr.map((text: string) => text.charAt(0).toUpperCase() + text.slice(1))
}
