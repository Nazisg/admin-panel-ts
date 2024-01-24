import { Layout } from "antd";
import Header from "shared/layout/Header";
import SideMenu from "shared/layout/SideMenu";
// import "./style.scss";
import Overview from "src/shared/components/home/Overview";
import { Outlet } from "react-router-dom";
import './style.scss'
import PrivateRouter from "src/pages/PrivateRouter";
export default function index() {
  const { Content } = Layout;

  return (
    <>
      <Layout className="layout">
        <SideMenu />
        <Layout className="wrapper">
          <Header />
          <PrivateRouter/>
          <Content className="content">
            {/* <Outlet /> */}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
