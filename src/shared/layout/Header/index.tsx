import { Avatar, Button, Input, Layout, Switch } from "antd";
import "./style.scss";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";

export default function index() {
  const { Header } = Layout;
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleThemeChange = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <Header className="header">
      <SearchOutlined />
      {/* <Input size="middle" className="search-input"/> */}
      <div>
        <MdOutlineLightMode className="light" />

        <Avatar icon={<UserOutlined />} />
      </div>{" "}
    </Header>
  );
}
