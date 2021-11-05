import { FC } from 'react'
import styles from './cards.module.css'

import { Title } from '../common/typography/typography'

import { substractKelvin } from '../../helpers/numbers/subtract-kelvin.helper'

import { IWeather } from '../../redux/app/types'

interface ICard {
  data: IWeather
}

export const Card: FC<ICard> = ({ data }) => {
  const { celsius } = substractKelvin(data.temp)
  return (
    <div className={styles.homeCard}>
      <Title title={data.date} mB={20} size={25} />
      <Title title={celsius} mB={20} size={25} />
    </div>
  )
}
