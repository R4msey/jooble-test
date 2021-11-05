import { ReactNode, FC } from 'react'
import styles from './containers.module.css'

interface IContainer {
  children: ReactNode
}
const GridContainer: FC<IContainer> = ({ children }) => {
  return (
    <div className={styles.gridContainer} style={{ marginTop: 30 }}>
      {children}
    </div>
  )
}

const WrapContainer: FC<IContainer> = ({ children }) => {
  return <div className={styles.wrapContainer}>{children}</div>
}

export { GridContainer, WrapContainer }
