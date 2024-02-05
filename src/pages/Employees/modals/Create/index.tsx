import {
    Button,
    Col,
    Flex,
    Form,
    Input,
    Modal,
    Row,
    Select,
    SelectProps,
} from "antd";
import { ActionModalProps } from "shared/types";

const Create: React.FC<ActionModalProps> = ({ modalOpen, setModalOpen }) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const optionsTeams: SelectProps["options"] = [];
  const optionsRole: SelectProps["options"] = [];
  const teams = [
    { id: "1", teamName: "Frontend" },
    { id: "2", teamName: "Backend" },
    { id: "3", teamName: "Mobile" },
  ];
  const roles = [
    { id: "1", roleName: "Admin" },
    { id: "2", roleName: "Employee" },
  ];
  teams.map((team) => {
    optionsTeams.push({
      value: team.id,
      label: team.teamName,
    });
  });
  roles.map((role) => {
    optionsRole.push({
      value: role.id,
      label: role.roleName,
    });
  });
  const handleChangeTeams = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  const handleChangeRole = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  return (
    <Modal
      title="Create Employee"
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
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label=" Name"
              name="firstName"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Nazrin" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Surname"
              name="lastName"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="Isgandarova" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Mail"
              name="userName"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="nazrin@crocusoft.az" size="large" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Password"
              name="mail"
              rules={[{ required: true, message: "" }]}
            >
              <Input placeholder="********" size="large" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Team"
              name="teams"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                size="large"
                onChange={handleChangeTeams}
                placeholder="Frontend"
                options={optionsTeams}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "" }]}
            >
              <Select
                size="large"
                onChange={handleChangeRole}
                placeholder="Employee"
                options={optionsRole}
              />
            </Form.Item>
          </Col>
        </Row>
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
