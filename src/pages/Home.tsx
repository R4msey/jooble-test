import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { Card } from '../components/cards/home.card'
import { Loader } from '../components/common/loader/loader'
import { LinkText, Title } from '../components/common/typography/typography'
import {
  GridContainer,
  WrapContainer,
} from '../components/containers/containers'
import { Header } from '../components/Home/header/header'

import { useAppSelector } from '../hooks/useRedux'

import { getCity } from '../redux/app/slice'
import { getWeather } from '../redux/app/thunks'
import { IWeather } from '../redux/app/types'

const Home = () => {
  const { weather, loading, quories } = useAppSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getWeather())
  }, [])

  return (
    <>
      <Header />
      <div
        style={{
          boxSizing: 'border-box',
          padding: 20,
          backgroundColor: '#f3f5f7',
        }}
      >
        <Title title='Last 10 quories' mB={20} size={23} />
        <WrapContainer>
          {quories ? (
            (quories as string[]).map((city: string, index: number) => (
              <LinkText
                key={index}
                onClick={() => (
                  dispatch(getCity(city)), dispatch(getWeather())
                )}
                title={city}
              />
            ))
          ) : (
            <Loader title='No saved' />
          )}
        </WrapContainer>
      </div>
      {!loading && (
        <GridContainer>
          {(weather as IWeather[]).map((day, index: number) => (
            <Card key={index} data={day} />
          ))}
        </GridContainer>
      )}
    </>
  )
}

export { Home }
