import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  FilterOutlined,
  LockOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type { SelectProps, TableProps } from "antd";
import {
  Button,
  Col,
  Descriptions,
  Drawer,
  Flex,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
export default function index() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  //select
  const optionsTeams: SelectProps["options"] = [];
  const optionsProject: SelectProps["options"] = [];
  const optionsRole: SelectProps["options"] = [];
  const teams = [
    { id: "1", teamName: "Frontend" },
    { id: "2", teamName: "Backend" },
    { id: "3", teamName: "Mobile" },
  ];
  const projects = [
    { id: "1", projectName: "Plast" },
    { id: "2", projectName: "Furniro" },
    { id: "3", projectName: "DailyReport" },
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
  projects.map((project) => {
    optionsProject.push({
      value: project.id,
      label: project.projectName,
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
  const handleChangeProjects = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  const handleChangeRole = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };

  //filter Drawer
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  ///view
  const [openView, setOpenView] = useState(false);

  const showDrawerView = () => {
    setOpenView(true);
  };
  const onCloseView = () => {
    setOpenView(false);
  };
  const [selectedEmployee, setSelectedEmployee] = useState<DataType | null>(
    null
  );
  const handleView = (record: DataType) => {
    setSelectedEmployee(record);
    showDrawerView();
  };
  //confirm
  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: "Do you want to delete this employee?",
      icon: <ExclamationCircleFilled />,
      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  //create modal
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false);
  const showModalAdd = () => {
    setIsModalOpenAdd(true);
  };
  const handleOkAdd = () => {
    setIsModalOpenAdd(false);
  };
  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
  };
  //update modal
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState(false);

  const showModalUpdate = () => {
    setIsModalOpenUpdate(true);
  };

  const handleOkUpdate = () => {
    setIsModalOpenUpdate(false);
  };

  const handleCancelUpdate = () => {
    setIsModalOpenUpdate(false);
  };

  ///table
  // const [status, setStatus] = useState<"active" | "deactive">("active");

  interface DataType {
    key: string;
    firstName: string;
    lastName: string;
    userName: string;
    mail: string;
    team: string;
    role: string;
    status: string;
  }
  type FieldType = {
    firstName?: string;
    lastName?: string;
    userName?: string;
    mail?: string;
    team?: string;
    status?: string;
    role?: string;
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      render: (text) => (
        <>
          {/* <Avatar icon={<UserOutlined />} alt="Avatar" /> */}
          <p style={{ marginLeft: 10 }}>{text}</p>
        </>
      ),
    },
    {
      title: "Surname",
      dataIndex: "lastName",
      key: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Mail",
      dataIndex: "mail",
      key: "mail",
    },
    {
      title: "Teams",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (_, record) => {
        let color;
        if (record.status === "active") {
          color = "green";
        } else if (record.status === "deactive") {
          color = "volcano";
        }
        return (
          <Tag
            //  onClick={() => handleToggleStatus(record)}
            color={color}
            key={record.status}
          >
            {record.status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="small">
          <Tooltip placement="top" title="View">
            <Button
              className={"btnView"}
              shape="circle"
              onClick={() => handleView(record)}
            >
              <EyeOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="Update">
            <Button
              className={"btnUpdate"}
              shape="circle"
              onClick={showModalUpdate}
            >
              <EditOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="Reset password">
            <Button
              className={"btnReset"}
              shape="circle"
              onClick={showModalResetPassword}
            >
              <LockOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="Delete">
            <Button
              className={"btnDel"}
              shape="circle"
              danger
              onClick={showConfirm}
            >
              <DeleteOutlined />
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      firstName: "Nazrin",
      lastName: "Isgandarova",
      userName: "Nazisg",
      mail: "naz@crocusoft.az",
      team: "Frontend",
      role: "User",
      status: "active",
    },
    {
      key: "2",
      firstName: "Rahman",
      lastName: "Aliyev",
      userName: "Rahali",
      mail: "rah@crocusoft.az",
      team: "Backend",
      role: "User",
      status: "active",
    },
    {
      key: "3",
      firstName: "Sevinc",
      lastName: "Mahmudlu",
      userName: "Sevmah",
      mail: "sev@crocusoft.az",
      team: "UX/UI Design",
      role: "User",
      status: "deactive",
    },
  ];
  //reset password
  type FieldTypeResetPassword = {
    newPassword?: string;
    confirmPassword?: string;
  };
  const [isModalOpenResetPassword, setIsModalOpenResetPassword] =
    useState(false);

  const showModalResetPassword = () => {
    setIsModalOpenResetPassword(true);
  };

  const handleOkResetPassword = () => {
    setIsModalOpenResetPassword(false);
  };

  const handleCancelResetPassword = () => {
    setIsModalOpenResetPassword(false);
  };
  return (
    <>
      <Flex justify="space-between">
        <Typography.Title className="title">Employees</Typography.Title>
        <Flex justify="flex-end" align="center" gap="middle">
          <Button
            onClick={showDrawer}
            icon={<FilterOutlined />}
            size="large"
            type="primary"
            ghost
          >
            Filter
          </Button>
          <Tooltip placement="top" title="Create">
            <Button
              onClick={showModalAdd}
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
              size="large"
              className="create-btn"
            ></Button>
          </Tooltip>
        </Flex>
      </Flex>
      <Table
        bordered
        size="large"
        className="table"
        pagination={{ pageSize: 10 }}
        scroll={{ y: 100, x: "auto" }}
        columns={columns}
        dataSource={data}
      />
      <Drawer title="Employees Filter" onClose={onClose} open={open}>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item label="Teams" name="teams">
            <Select
              size="large"
              onChange={handleChangeTeams}
              placeholder="Frontend"
              options={optionsTeams}
            />
          </Form.Item>
          <Form.Item label="Project Name" name="projectName">
            <Select
              mode="tags"
              size="large"
              placeholder="Furniro"
              onChange={handleChangeProjects}
              options={optionsProject}
            />
          </Form.Item>
          <Form.Item label="Name" name="firstName">
            <Input placeholder="Nazrin" size="large" />
          </Form.Item>
          <Form.Item label="Surname" name="lastName">
            <Input placeholder="Isgandarova" size="large" />
          </Form.Item>
        </Form>
      </Drawer>
      <Modal
        title="Create Employee"
        open={isModalOpenAdd}
        onOk={handleOkAdd}
        onCancel={handleCancelAdd}
        centered
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
              <Form.Item<FieldType>
                label="Mail"
                name="userName"
                rules={[{ required: true, message: "" }]}
              >
                <Input placeholder="nazrin@crocusoft.az" size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FieldType>
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
                label="Teams"
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
          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
      <Drawer title="View Employee" onClose={onCloseView} open={openView}>
        {selectedEmployee && (
          <Descriptions layout="vertical" bordered column={1}>
            {Object.entries(selectedEmployee).map(([key, value]) => (
              <Descriptions.Item key={key} label={key}>
                {value}
              </Descriptions.Item>
            ))}
          </Descriptions>
        )}
      </Drawer>
      <Modal
        title="Update EmployeeRe"
        open={isModalOpenUpdate}
        onOk={handleOkUpdate}
        onCancel={handleCancelUpdate}
        centered
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
              <Form.Item<FieldType>
                label="Mail"
                name="userName"
                rules={[{ required: true, message: "" }]}
              >
                <Input placeholder="nazrin@crocusoft.az" size="large" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item<FieldType>
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
                label="Teams"
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
          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
      <Modal
        title="Reset Password"
        open={isModalOpenResetPassword}
        onOk={handleOkResetPassword}
        onCancel={handleCancelResetPassword}
        centered
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item<FieldTypeResetPassword>
            label="New Password"
            name="newPassword"
          >
            <Input placeholder="********" size="large" />
          </Form.Item>
          <Form.Item<FieldTypeResetPassword>
            label="Confirm Password"
            name="confirmPassword"
          >
            <Input placeholder="********" size="large" />
          </Form.Item>
          {/* <Button type="primary" htmlType="submit">
            Reset Password
          </Button> */}
        </Form>
      </Modal>
    </>
  );
}
