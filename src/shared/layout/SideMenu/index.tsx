import {
  FolderOutlined,
  FormOutlined,
  LeftOutlined,
  RightOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Image, Layout, Menu, Typography } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "shared/media/imgs/crocusoft-logo.png";
import styles from "./SideMenu.module.scss";

const enum Urls {
  TEAM = "/teams",
  PROJECT = "/projects",
  REPORT = "/daily-report",
  EMPLOYEE = "/",
}
export default function index() {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  console.log(location);

  return (
    <Sider
      className={styles.sideMenu}
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="demo-logo-vertical" />
      <Typography.Text className={styles.title}>
        <Image className={styles.logo} src={logo} preview={false} />
        <Typography.Title style={{ display: collapsed ? "none" : "" }}>
          CRM
        </Typography.Title>
      </Typography.Text>
      <Menu
        theme="light"
        mode="inline"
        items={[
          {
            label: <Link to="/">Employees</Link>,
            key: "1",
            icon: <UserOutlined />,
            className:
              location.pathname === Urls.EMPLOYEE ? styles.activeLink : "",
          },
          {
            label: <Link to="/teams">Teams</Link>,
            key: "2",
            icon: <TeamOutlined />,
            className: location.pathname === Urls.TEAM ? styles.activeLink : "",
          },
          {
            label: <Link to="/daily-report">Daily Report</Link>,
            key: "3",
            icon: <FormOutlined />,
            className:
              location.pathname === Urls.REPORT ? styles.activeLink : "",
          },
          {
            label: <Link to="/projects">Projects</Link>,
            key: "4",
            icon: <FolderOutlined />,
            className:
              location.pathname === Urls.PROJECT ? styles.activeLink : "",
          },
        ]}
      ></Menu>
    </Sider>
  );
}
