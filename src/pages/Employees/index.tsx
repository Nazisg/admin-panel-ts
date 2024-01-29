import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  FilterOutlined,
  LockOutlined,
  UserAddOutlined,
  UserOutlined
} from "@ant-design/icons";
import type { ConfigProviderProps, SelectProps, TableProps } from "antd";
import {
  Avatar,
  Button,
  Drawer,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag, Tooltip,
  Typography
} from "antd";
import { useState } from "react";
import styles from "./Employees.module.scss";
export default function index() {
  type SizeType = ConfigProviderProps["componentSize"];
  const optionsTeams: SelectProps["options"] = [];
  const optionsProject: SelectProps["options"] = [];

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

  const handleChangeTeams = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  const handleChangeProjects = (value: string | string[]) => {
    console.log(`Selected: ${value}`);
  };
  //modal
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenFilter, setIsModalOpenFilter] = useState(false);
  const showModalFilter = () => {
    setIsModalOpenFilter(true);
  };

  const handleOk = () => {
    setIsModalOpenFilter(false);
  };

  const handleCancel = () => {
    setIsModalOpenFilter(false);
  };

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  ///filter Drawer
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  ///table
  const [status, setStatus] = useState<"active" | "deactive">("active");

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
  const { confirm } = Modal;

  const showConfirm = () => {
    confirm({
      title: "Do you want to delete this user?",
      icon: <ExclamationCircleFilled />,

      onOk() {
        console.log("OK");
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      render: (text) => (
        <>
          {/* <Avatar icon={<UserOutlined />} alt="Avatar" /> */}
          {/* <Avatar style={{ backgroundColor: '#6743c159', color: '#E73F4C' }}>{text.slice(0,1)}</Avatar> */}
          <a style={{ marginLeft: 10 }}>{text}</a>
        </>
      ),
    },
    {
      title: "Surname",
      dataIndex: "lastName",
      key: "lastName",
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
      render: () => (
        <Space size="small">
          <Tooltip placement="top" title="View">
            <Button shape="circle" onClick={showModal}>
              <EyeOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="Update">
            <Button shape="circle" onClick={showModal}>
              <EditOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="Reset password">
            <Button shape="circle">
              <LockOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="Delete">
            <Button shape="circle" danger onClick={showConfirm}>
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
  return (
    <div className={styles.users}>
      <Typography.Title className={styles.title}>Employees </Typography.Title>
      <Space>
        <Button onClick={showDrawer} icon={<FilterOutlined />} size="large">
          Filter
        </Button>
        <Button
          onClick={showModal}
          type="primary"
          shape="round"
          icon={<UserAddOutlined />}
          size="large"
        >
          Add Employee
        </Button>
      </Space>
      <Table
        bordered
        className={styles.table}
        columns={columns}
        dataSource={data}
      />
      {/* <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
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
    </div>
  );
}
