import { FC, InputHTMLAttributes } from 'react'
import styles from './input.module.css'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<IInput> = (props) => {
  return <input {...props} className={styles.input} type='text' />
}
