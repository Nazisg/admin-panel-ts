import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  FilterOutlined,
  LockOutlined,
  UserAddOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import type { ConfigProviderProps, SelectProps, TableProps } from "antd";
import {
  Avatar,
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
import styles from "./Teams.module.scss";
export default function index() {
  type SizeType = ConfigProviderProps["componentSize"];
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  //select
  const optionsTeams: SelectProps["options"] = [];
  const optionsProject: SelectProps["options"] = [];
  const optionsRole: SelectProps["options"] = [];
  const optionsEmployees: SelectProps["options"] = [];

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
  const employees = [
    { id: "1", employeeName: "Nazrin Isgandarova" },
    { id: "2", employeeName: "Rahman Aliyev" },
    { id: "3", employeeName: "Lala Agayeva" },
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
  employees.map((employee) => {
    optionsEmployees.push({
      value: employee.id,
      label: employee.employeeName,
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
  const handleChangeEmployees = (value: string | string[]) => {
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
      title: "Do you want to delete this team?",
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
  const [status, setStatus] = useState<"active" | "deactive">("active");

  interface DataType {
    key: string;
    name: string;
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
      dataIndex: "name",
      key: "name",
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
      name: "Frontend",
    },
    {
      key: "2",
      name: "Backend",
    },
    {
      key: "3",
      name: "Mobile",
    },
    {
      key: "4",
      name: "UX/UI Design",
    },
  ];

  return (
    <>
      <Flex justify="space-between">
        <Typography.Title className="title">Teams</Typography.Title>
        <Flex justify="flex-end" align="center" gap="middle">
          <Button onClick={showDrawer} icon={<FilterOutlined />} size="large">
            Filter
          </Button>
          <Button
            onClick={showModalAdd}
            type="primary"
            shape="round"
            icon={<UsergroupAddOutlined />}
            size="large"
          >
            Create Team
          </Button>
        </Flex>
      </Flex>{" "}
      <Table bordered className="table" columns={columns} dataSource={data} />
      <Modal
        title="Create Team"
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
          <Form.Item
            label="Teams"
            name="teams"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Frontend" size="large" />
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
          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
      <Drawer title="View Team" onClose={onCloseView} open={openView}>
        {selectedEmployee && (
          <Descriptions>
            {Object.entries(selectedEmployee).map(([key, value]) => (
              <Descriptions.Item key={key} label={key}>
                {value}
              </Descriptions.Item>
            ))}
          </Descriptions>
        )}
      </Drawer>
      <Modal
        title="Update Team"
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
          <Form.Item
            label="Teams"
            name="teams"
            rules={[{ required: true, message: "" }]}
          >
            <Input placeholder="Frontend" size="large" />
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

          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
      <Drawer title="Teams Filter" onClose={onClose} open={open}>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item label="Teams" name="teams">
            <Select
              mode="tags"
              size="large"
              onChange={handleChangeTeams}
              placeholder="Frontend"
              options={optionsTeams}
            />
          </Form.Item>
          <Form.Item label="Employees" name="employees">
            <Select
              mode="tags"
              size="large"
              placeholder="Nazrin Isgandarova"
              onChange={handleChangeEmployees}
              options={optionsEmployees}
            />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
}
