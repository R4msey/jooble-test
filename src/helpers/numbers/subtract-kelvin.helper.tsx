import { Helper } from '../../common/enums/app/helper/helper-enums'

export const substractKelvin = (value: number) => {
  const kelvin = Helper.ConstantKelvin

  let celsius: number | string = value - kelvin

  celsius = celsius.toFixed()

  return { celsius }
}
