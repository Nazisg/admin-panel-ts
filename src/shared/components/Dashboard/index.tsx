import React, { useState } from "react";
import "./style.scss";
import SideMenu from "shared/layout/SideMenu";
import Header from "../../layout/Header/index";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Typography } from "antd";

export default function index() {
  const { Sider, Content } = Layout;

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout className="dashboard">
        <Sider
          className="side-menu"
          trigger={null}
          collapsible
          collapsed={collapsed}
          theme="light"
        >
          <div className="demo-logo-vertical" />
          {/* <Typography.Title>Dashboard</Typography.Title> */}
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <UserOutlined />,
                label: "Users",
              },
              {
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "Teams",
              },
              {
                key: "3",
                icon: <UploadOutlined />,
                label: "Daily Report",
              },
              {
                key: "4",
                icon: <UploadOutlined />,
                label: "Projects",
              },
            ]}
          />
        </Sider>
        <Layout className="wrapper">
          <Header />
          <Content
            style={{
              marginTop: "20px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
