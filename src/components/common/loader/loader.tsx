import { FC } from 'react'

interface ILoader {
  title: string
}

export const Loader: FC<ILoader> = ({ title }) => {
  return <div>{title}</div>
}
