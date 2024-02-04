import { Layout } from "antd";
import { FC, ReactNode } from "react";
import styles from "./Auxiliary.module.scss";

interface LayoutType {
  children: ReactNode;
}
const Auxiliary: FC<LayoutType> = ({ children }) => {
  return <Layout className={styles.auxiliary}>{children}</Layout>;
};

export default Auxiliary;
