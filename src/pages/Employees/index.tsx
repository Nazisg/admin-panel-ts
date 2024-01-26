import {
  UserAddOutlined,
  UploadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import type { ConfigProviderProps, SelectProps } from "antd";
import { Button, Input, Row, Select, Space, Typography } from "antd";
import Table from "src/shared/components/Table";
import { useState } from "react";
import Modal from "src/shared/components/AddUserModal";
import styles from "./style.module.scss";
import CustomModal from "src/shared/components/CustomModal";
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
      <Typography.Title className={styles.title}>Employees </Typography.Title>
      <Space>
        <Select
          size="large"
          onChange={handleChange}
          placeholder="Teams"
          style={{ width: 200 }}
          options={options}
        />
        <Select
          mode="tags"
          size="large"
          style={{ width: 200 }}
          placeholder="Project name"
          onChange={handleChange}
          options={options}
        />
        <Input placeholder="Name" size="large" style={{ width: 200 }} />
        <Input placeholder="Surname" size="large" style={{ width: 200 }} />
        {/* <Button
          onClick={showModal}
          // type="primary"
          // shape="round"
          icon={<FilterOutlined />}
          size="large"
        >
          Filter
        </Button> */}
        {/* <Button
          // onClick={showModal}
          // type="primary"
          // shape="round"
          icon={<UploadOutlined />}
          size="large"
        >
          Export
        </Button> */}

        <Button
          onClick={showModal}
          type="primary"
          shape="round"
          icon={<UserAddOutlined />}
          size="large"
          // styles={{width:"100%"}}
        >
          Add Employee
        </Button>
      </Space>

      <Table />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {/* <CustomModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      >
        <p>Custom Modal</p>
      </CustomModal> */}
    </div>
  );
}
