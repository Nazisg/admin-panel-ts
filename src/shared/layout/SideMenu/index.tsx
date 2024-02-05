import {
  FolderOutlined,
  FormOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Image, Layout, Menu, Typography } from "antd";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "shared/media/imgs/crocusoft-logo.png";
import styles from "./SideMenu.module.scss";

const enum Urls {
  TEAM = "/teams",
  PROJECT = "/projects",
  REPORT = "/reports",
  EMPLOYEE = "/",
}
export default function SideMenu() {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      setCollapsed(innerWidth < 900);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Sider
      className={styles.sideMenu}
      theme="light"
      collapsible={window.innerWidth >= 900}
      collapsed={collapsed}
      breakpoint="lg"
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
            label: <Link to="/reports">Daily Report</Link>,
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
