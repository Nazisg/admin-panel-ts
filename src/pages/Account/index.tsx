import {
  UserOutlined,UnlockOutlined
} from "@ant-design/icons";
import { Tabs } from "antd";
import Account from "shared/components/account/Account/index";
import Security from "shared/components/account/Security/index";
export default function index() {
  const onChange = (key: string) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Account",
      children: <Account />,
      icon: <UserOutlined />,

    },
    {
      key: "2",
      label: "Security",
      children: <Security />,
      icon: <UnlockOutlined />,

    },
  ];
  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
}
