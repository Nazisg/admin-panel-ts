import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  FilterOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import type { SelectProps, TableProps } from "antd";
import {
  Button,
  DatePicker,
  Descriptions,
  Drawer,
  Flex,
  Form,
  Modal,
  Select,
  Space,
  Table,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function index() {
  const [value, setValue] = useState("");

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  const { RangePicker } = DatePicker;

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
      title: "Do you want to delete this note?",
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
  interface DataType {
    key: string;
    firstName: string;
    lastName: string;
    projectName: string;
    createdDate?: string;
    note: string;
  }
  type FieldType = {
    firstName?: string;
    lastName?: string;
    name?: string;
    userName?: string;
    createdDate?: string;
    note?: string;
  };
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
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
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "Created date",
      dataIndex: "createdDate",
      key: "createdDate",
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
      render: (text) => <p>{text.slice(0, 20) + "..."}</p>,
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
      firstName: "Nazrin",
      lastName: "Isgandarova",
      projectName: "Furniro",
      createdDate: "2023-11-20",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui leo, cursus id malesuada sit amet, ultricies sed nisi. Maecenas a velit elementum, tincidunt arcu facilisis, luctus massa.",
    },
    {
      key: "2",
      firstName: "Rahman",
      lastName: "Aliyev",
      projectName: "Daily Report",
      createdDate: "2023-11-20",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui leo, cursus id malesuada sit amet, ultricies sed nisi. Maecenas a velit elementum, tincidunt arcu facilisis, luctus massa.",
    },
    {
      key: "3",
      firstName: "Sevinc",
      lastName: "Mahmudlu",
      projectName: "Plast",
      createdDate: "2023-10-27",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui leo, cursus id malesuada sit amet, ultricies sed nisi. Maecenas a velit elementum, tincidunt arcu facilisis, luctus massa.",
    },
  ];

  return (
    <>
      <Flex justify="space-between">
        <Typography.Title className="title">Daily Report</Typography.Title>
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
          <Button icon={<UploadOutlined />} ghost type="primary" size="large">
            Export Excel
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
      <Table bordered className="table" columns={columns} dataSource={data} />
      <Drawer title="Daiy Report Filter" onClose={onClose} open={open}>
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item label="Date range" name="date">
            <RangePicker size="large" />
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
          <Form.Item
            label="Employees"
            name="employees"
            // rules={[{ required: true, message: "" }]}
          >
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
      <Modal
        title="Create Daily Report"
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
        title="Update Note"
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
            // label="Note"
            name="note"
          >
            <ReactQuill theme="snow" value={value} onChange={setValue} />
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
