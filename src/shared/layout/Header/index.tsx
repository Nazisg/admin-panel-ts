import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, Layout, Modal, Space, Tooltip, Typography } from "antd";
import { useState } from "react";
import { MdOutlineLightMode,MdOutlineNightlight } from "react-icons/md";
import styles from "./Header.module.scss";
export default function index() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { Header } = Layout;
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleThemeChange = (checked: boolean) => {
    setDarkMode(checked);
    console.log(darkMode);
  };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    newPassword?: string;
    confirmPassword?: string;
  };
  return (
    <Header className={styles.header}>
      <Space>
        <Typography.Title className={styles.title}>
          Nazrin Isgandarova
        </Typography.Title>
        <Avatar icon={<UserOutlined />} />
        <Tooltip placement="top" title="Change password">
            <Button shape="circle"onClick={showModal}>
              <LockOutlined />
            </Button>
        </Tooltip>
        <Button shape="circle" onClick={() => handleThemeChange(!darkMode)}>
          <MdOutlineLightMode className={styles.ligth} />
        </Button>
      </Space>
      {/* //change password modal */}
      <Modal title="Change Password" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
              <Form.Item<FieldType> label="New Password" name="newPassword">
                <Input placeholder="********" size="large" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Confirm Password"
                name="confirmPassword"
              >
                <Input placeholder="********" size="large" />
              </Form.Item>

            <Button type="primary" htmlType="submit">
              Change Password
            </Button>
          </Form>
      </Modal>
    </Header>
  );
}
