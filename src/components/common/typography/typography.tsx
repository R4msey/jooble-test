import { FC, memo } from 'react'
import styles from './typography.module.css'

interface ITypography {
  title: string
  mB?: number
  size?: string | number
  style?: object
  onClick?: () => void
}
export const Title: FC<ITypography> = memo((props) => {
  const { title, mB, size, style } = props

  return (
    <p
      className={styles.typography}
      style={{ marginBottom: mB || 0, fontSize: size, ...style }}
    >
      {title}
    </p>
  )
})

export const LinkText: FC<ITypography> = (props) => {
  const { title, style, onClick } = props

  return (
    <span onClick={onClick} className={styles.linkText} style={{ ...style }}>
      {title}
    </span>
  )
}
