import { useState, useEffect } from 'react'
import styles from './header.module.css'

import { useAppDispatch, useAppSelector } from '../../../hooks/useRedux'

import { getCity } from '../../../redux/app/slice'
import { getWeather } from '../../../redux/app/thunks'

import { headerTitle } from '../../../helpers/strings/header-title.helper'

import { Title } from '../../common/typography/typography'

import { Button } from '../../ui/buttons/button'
import { Input } from '../../ui/inputs/input'

export const Header = () => {
  const { city, weather } = useAppSelector((state) => state.app)
  const [value, setValue] = useState(city)

  useEffect(() => setValue(city), [city])

  const dispatch = useAppDispatch()

  const title = headerTitle(city, weather)

  return (
    <div className={styles.header}>
      <div className={styles.leftContainer}>
        <Title title='Weather Forecast' mB={15} />
        <div>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder='Which city ?'
          />
          <Button
            onClick={() => (dispatch(getCity(value)), dispatch(getWeather()))}
            title='Search'
            style={{ marginLeft: 20 }}
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Title title={title} size='3.5vw' />
      </div>
    </div>
  )
}
