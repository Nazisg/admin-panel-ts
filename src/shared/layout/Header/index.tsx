import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Flex,
  Form,
  Input,
  Layout,
  Modal,
  Space,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import styles from "./Header.module.scss";
type ThemeProps = {
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};
const Header: React.FC<ThemeProps> = ({ setIsDarkMode }) => {
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
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    newPassword?: string;
    confirmPassword?: string;
    oldPassword?: string;
  };

  const handleClick = () => {
    if (setIsDarkMode) {
      setIsDarkMode((previousValue) => !previousValue);
    }
  };
  return (
    <Header className={styles.header}>
      <Space>
        <Typography.Title className={styles.title}>
          Nazrin Isgandarova
        </Typography.Title>
        <Avatar icon={<UserOutlined />} />
        <Tooltip placement="top" title="Change password">
          <Button shape="circle" type="primary" ghost onClick={showModal}>
            <LockOutlined />
          </Button>
        </Tooltip>
        <Button shape="circle" type="primary" ghost onClick={handleClick}>
          <MdOutlineLightMode className={styles.ligth} />
        </Button>
      </Space>
      {/* //change password modal */}
      <Modal
        title="Change Password"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldType> label="Old Password" name="oldPassword">
            <Input placeholder="********" size="large" />
          </Form.Item>
          <Form.Item<FieldType> label="New Password" name="newPassword">
            <Input placeholder="********" size="large" />
          </Form.Item>
          <Form.Item<FieldType> label="Confirm Password" name="confirmPassword">
            <Input placeholder="********" size="large" />
          </Form.Item>
          <Flex justify="end">
            <Button type="primary" htmlType="submit">
              Change Password
            </Button>
          </Flex>
        </Form>
      </Modal>
    </Header>
  );
};
export default Header;
