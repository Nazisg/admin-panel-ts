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
        defaultSelectedKeys={["1"]}
        items={[
         {
          label: <Link to="/">Employees</Link>,
          key: "1",
          icon: <UserOutlined />,
         },{
          label: <Link to="/teams">Teams</Link>,
          key: "2",
          icon: <TeamOutlined />,
         },{
          label: <Link to="/daily-report">Daily Report</Link>,
          key: "3",
          icon: <FormOutlined />,
         },{
          label: <Link to="/projects">Projects</Link>,
          key: "4",
          icon: <FolderOutlined />,
         }
       ]}
      >
      </Menu>
    </Sider>
  );
}
