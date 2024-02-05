import { Button, Flex, Form, Modal } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ActionModalProps } from "shared/types";

const Update: React.FC<ActionModalProps> = ({ modalOpen, setModalOpen }) => {
  const [value, setValue] = useState("");
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <Modal
      title="Update Report"
      centered
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      onCancel={() => setModalOpen(false)}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
    >
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item name="note">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </Form.Item>
        <Flex justify="end">
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export default Update;
