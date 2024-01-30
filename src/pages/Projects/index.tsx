import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  FilterOutlined,
  LockOutlined,
  UserAddOutlined,
  UserOutlined,
  FolderAddOutlined,
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
import styles from "./Employees.module.scss";
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
    projectName: string;
  }
  type FieldType = {
    firstName?: string;
    projectName?: string;
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "projectName",
      key: "projectName",
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
        </Space>
      ),
    },
  ];
  const data: DataType[] = [
    {
      key: "1",
      projectName: "Plast",
    },
    {
      key: "2",
      projectName: "Furniro",
    },
    {
      key: "3",
      projectName: "Daily Report",
    },
  ];
  return (
    <>
      <Flex justify="space-between">
        <Typography.Title className="title">Projects</Typography.Title>
        <Flex justify="flex-end" align="center" gap="middle">
          <Button onClick={showDrawer} icon={<FilterOutlined />} size="large">
            Filter
          </Button>
          <Button
            onClick={showModalAdd}
            type="primary"
            shape="round"
            icon={<FolderAddOutlined />}
            size="large"
          >
            Create Project
          </Button>
        </Flex>
      </Flex>{" "}
      <Table bordered className="table" columns={columns} dataSource={data} />
      <Drawer title="Projects Filter" onClose={onClose} open={open}>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item label="Project Name" name="projectName">
            <Select
              mode="tags"
              size="large"
              placeholder="Furniro"
              onChange={handleChangeProjects}
              options={optionsProject}
            />
          </Form.Item>
        </Form>
      </Drawer>
      <Modal
        title="Create Project"
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
          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
      <Drawer title="View Project" onClose={onCloseView} open={openView}>
        {selectedEmployee && (
          <Descriptions layout="vertical" bordered>
            {Object.entries(selectedEmployee).map(([key, value]) => (
              <Descriptions.Item key={key} label={key}>
                {value}
              </Descriptions.Item>
            ))}
          </Descriptions>
        )}
      </Drawer>
      <Modal
        title="Update Project"
        open={isModalOpenUpdate}
        onOk={handleOkUpdate}
        onCancel={handleCancelUpdate}
        centered
      >
        <Form
          name="basic"
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

          {/* <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
}
