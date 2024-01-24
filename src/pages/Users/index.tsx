import { UserAddOutlined } from "@ant-design/icons";
import type { ConfigProviderProps, SelectProps } from "antd";
import { Button, Input, Select, Space, Typography } from "antd";
import "./style.scss";
import Table from "shared/components/users/Table";
import { useState } from "react";
import Modal from "shared/components/users/Modal";
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
    <div className="users">
      <Typography.Title className="title">Search Filters</Typography.Title>
      <Space>
        <Select
          size="large"
          onChange={handleChange}
          placeholder="Team"
          style={{ width: 200 }}
          options={options}
        />
        <Select
          size="large"
          placeholder="Status"
          onChange={handleChange}
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
        <Input placeholder="User name" size="large" style={{ width: 200 }} />
        <Button
          onClick={showModal}
          type="primary"
          shape="round"
          icon={<UserAddOutlined />}
          size="large"
        >
          Add User
        </Button>
      </Space>

      <Table />
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}
