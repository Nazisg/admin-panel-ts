import { Button, Flex, Form, Modal, Select, SelectProps } from "antd";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { ActionModalProps } from "shared/types";

const Create: React.FC<ActionModalProps> = ({ modalOpen, setModalOpen }) => {
  const [value, setValue] = useState("");
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const optionsProject: SelectProps["options"] = [];
  const projects = [
    { id: "1", projectName: "Plast" },
    { id: "2", projectName: "Furniro" },
    { id: "3", projectName: "DailyReport" },
  ];
  projects.map((project) => {
    optionsProject.push({
      value: project.id,
      label: project.projectName,
    });
  });
  const handleChangeProjects = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <Modal
      title="Create Report"
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
        <Form.Item
          label="Project Name"
          name="projectName"
          rules={[{ required: true, message: "" }]}
        >
          <Select
            mode="tags"
            size="large"
            placeholder="Furniro"
            onChange={handleChangeProjects}
            options={optionsProject}
          />
        </Form.Item>
        <Form.Item
          label="Note"
          name="dailyReport"
          rules={[{ required: true, message: "" }]}
        >
          <ReactQuill theme="snow" value={value} onChange={setValue} />{" "}
        </Form.Item>
        <Flex justify="end">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export default Create;
