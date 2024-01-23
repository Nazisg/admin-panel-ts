import { Layout } from "antd";
import Header from "shared/layout/Header";
import SideMenu from "shared/layout/SideMenu";
// import "./style.scss";
import Overview from "src/shared/components/home/Overview";
import { Outlet } from "react-router-dom";
import './style.scss'
export default function index() {
  const { Content } = Layout;

  return (
    <>
      <Layout className="layout">
        <SideMenu />
        <Layout className="wrapper">
          <Header />
          <Content>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
