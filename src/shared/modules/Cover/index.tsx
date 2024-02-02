import { Layout, theme } from "antd";
import { FC, ReactNode } from "react";
import styles from "./Cover.module.scss";
interface LayoutType {
  children: ReactNode;
}

const Cover: FC<LayoutType> = ({ children }) => {
  const { Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
      }}
      className={styles.cover}
    >
      {children}
    </Content>
  );
};

export default Cover;
