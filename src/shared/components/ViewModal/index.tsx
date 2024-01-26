import React, { useState } from "react";
import { Button, Form, Modal, Input, Row, Space, Col } from "antd";
// import "./style.scss";
interface ModalProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddUserModal: React.FC<ModalProps> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    firstName?: string;
    lastName?: string;
    userName?: string;
    mail?: string;
    team?: string;
    status?: string;
    role?: string;
  };
  return (
    <div>
      <Modal
        title="Add User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "" },
                ]}
              >
                <Input placeholder="Nazrin" size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "" },
                ]}
              >
                <Input placeholder="Isgandarova" size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item<FieldType>
                label="User Name"
                name="userName"
                rules={[{ required: true, message: "" }]}
              >
                <Input placeholder="Nazisg" size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FieldType>
                label="Mail"
                name="mail"
                rules={[{ required: true, message: "" }]}
              >
                <Input placeholder="nazrin@crocusoft.az" size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Form.Item<FieldType>
                label="Team"
                name="team"
                rules={[{ required: true, message: "" }]}
              >
                <Input placeholder="Frontend" size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FieldType>
                label="Role"
                name="role"
                rules={[{ required: true, message: "" }]}
              >
                <Input placeholder="User" size="large" />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default AddUserModal;
