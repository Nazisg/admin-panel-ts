import { Avatar, Button, Layout, Switch } from "antd";
import "./style.scss";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { MdLightMode } from "react-icons/md";
import { useState } from "react";

export default function index() {
  const { Header } = Layout;
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleThemeChange = (checked: boolean) => {
    setDarkMode(checked);
  };

  return (
    <Header
    // theme={darkMode ? "dark" : "light"}
    className="header"
  >
      <Button shape="circle" onClick={() => handleThemeChange(!darkMode)}>
          <MdLightMode />
        </Button>
        <Avatar icon={<UserOutlined />} />
      </Header>
  );
}
