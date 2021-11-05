export const findArithmeticMean = (data: { temp: number }[]) => {
  const result =
    data.reduce((acc, curr) => acc + curr.temp, 0) / (data.length || 1)
  return result
}
