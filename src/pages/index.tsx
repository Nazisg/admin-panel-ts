export { default as Account } from "./Account/index";
export { default as DailyReport } from "./DailyReport/index";
export { default as Home } from "./Home/index";
export { default as Login } from "./Login/index";
export { default as Projects } from "./Projects/index";
export { default as Teams } from "./Teams/index";
export { default as Users } from "./Users/index";

import { Layout } from "antd";
import Header from "shared/layout/Header";
import SideMenu from "shared/layout/SideMenu";
import { Content } from "antd/es/layout/layout";
import PrivateRouter from "./PrivateRouter";
import './style.scss'

const Router = () => {
  return (
      <Layout className="layout">
        <SideMenu />
        <Layout className="wrapper">
          <Header />
          <Content className="content">
          <PrivateRouter/>
          </Content>
        </Layout>
      </Layout>
  );
};


export default Router;
