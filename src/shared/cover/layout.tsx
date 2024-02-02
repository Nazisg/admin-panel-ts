import { Layout } from "antd";
import Header from "shared/layout/Header";
import SideMenu from "shared/layout/SideMenu";
import PrivateRouter from "src/pages/PrivateRouter";
export default function index() {
  const { Content } = Layout;

  return (
    <>
      <Layout className="layout">
        <SideMenu />
        <Layout className="wrapper">
          <Header />
          <PrivateRouter />
          <Content className="content"></Content>
        </Layout>
      </Layout>
    </>
  );
}
