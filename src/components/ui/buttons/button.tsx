import { FC } from 'react'
import styles from './button.module.css'

interface IButton {
  title: string
  style?: object
  onClick: () => void
}

export const Button: FC<IButton> = (props) => {
  const { title, style, onClick } = props

  return (
    <button onClick={onClick} className={styles.button} style={style}>
      {title}
    </button>
  )
}
