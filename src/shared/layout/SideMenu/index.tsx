import {
  FolderOutlined,
  FormOutlined,
  HomeOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.scss";

import { Layout, Menu, Typography } from "antd";
import { Link } from "react-router-dom";

export default function index() {
  const { Sider, Content } = Layout;

  return (
    <Sider theme="light" className="side-menu">
      <Typography.Title className="title">Dashboard</Typography.Title>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          <Link to="/account">Account Settings</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/users">Users</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          <Link to="/teams">Teams</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<FormOutlined />}>
          <Link to="/daily-report">Daily Report</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<FolderOutlined />}>
          <Link to="/projects">Projects</Link>
        </Menu.Item>
      </Menu>
      
    </Sider>
  );
}
