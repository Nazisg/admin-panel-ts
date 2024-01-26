import { Content } from 'antd/es/layout/layout';
import { FC, ReactNode } from 'react';
import styles from './Cover.module.scss'
interface LayoutType {
    children: ReactNode;
  }

const Cover: FC<LayoutType>= ({children}) => {
  return (
    <Content className={styles.cover}>{children}</Content>
  )
}

export default Cover