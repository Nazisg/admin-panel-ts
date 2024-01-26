import { UserOutlined,LockOutlined } from "@ant-design/icons";
import { Avatar, Button, Layout, Space, Tooltip, Typography } from "antd";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import styles from "./style.module.scss";
export default function index() {
  const { Header } = Layout;
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleThemeChange = (checked: boolean) => {
    setDarkMode(checked);
    console.log(darkMode)
  };

  return (
    <Header className={styles.header}>
        <Space>
        <Typography.Title className={styles.title}>Nazrin Isgandarova</Typography.Title>
          <Avatar icon={<UserOutlined />} />
          <Tooltip placement="top" title="change password">
            <Button shape="circle">
              <LockOutlined />
            </Button>
          </Tooltip>
          <Button shape="circle" onClick={() => handleThemeChange(!darkMode)}>
            <MdOutlineLightMode className={styles.ligth} />
          </Button>
        </Space>
    </Header>
  );
}
