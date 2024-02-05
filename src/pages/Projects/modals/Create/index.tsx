import { Button, Flex, Form, Input, Modal, Select, SelectProps } from "antd";
import { ActionModalProps } from "shared/types";

const Create: React.FC<ActionModalProps> = ({ modalOpen, setModalOpen }) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const optionsEmployees: SelectProps["options"] = [];
  const employees = [
    { id: "1", employeeName: "Nazrin Isgandarova" },
    { id: "2", employeeName: "Rahman Aliyev" },
    { id: "3", employeeName: "Lala Agayeva" },
  ];
  employees.map((employee) => {
    optionsEmployees.push({
      value: employee.id,
      label: employee.employeeName,
    });
  });
  const handleChangeEmployees = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

  return (
    <Modal
      title="Create Project"
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
          <Input placeholder="Plast" size="large" />
        </Form.Item>
        <Form.Item
          label="Employees"
          name="employees"
          rules={[{ required: true, message: "" }]}
        >
          <Select
            mode="tags"
            size="large"
            placeholder="Furniro"
            onChange={handleChangeEmployees}
            options={optionsEmployees}
          />
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
