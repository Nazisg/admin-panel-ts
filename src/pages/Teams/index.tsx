import {
  UserAddOutlined,
  UploadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import type { ConfigProviderProps, SelectProps } from "antd";
import { Button, Input, Row, Select, Space, Typography } from "antd";
import Table from "src/shared/components/TableTeams";
import { useState } from "react";
import Modal from "src/shared/components/AddUserModal";
import styles from './Teams.module.scss';
export default function index() {
  type SizeType = ConfigProviderProps["componentSize"];
  const options: SelectProps["options"] = [];

  for (let i = 10; i < 20; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    });
  }

  const handleChange = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  // const handleOk = () => {
  //   setIsModalOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <div className={styles.users}>
      <Typography.Title className={styles.title}>Teams </Typography.Title>
      <Space>
        <Button
          onClick={showModal}
          type="primary"
          shape="round"
          icon={<UserAddOutlined />}
          size="large"
        >
          Add Team
        </Button>
      </Space>

      <Table />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
