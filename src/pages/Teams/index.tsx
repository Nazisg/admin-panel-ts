import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import type { SelectProps, TableProps } from "antd";
import {
  Button,
  Descriptions,
  Drawer,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
export default function index() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  //select
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

  interface DataType {
    key: string;
    name: string;
  }
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
          <Descriptions bordered layout="vertical" column={1}>
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
    </>
  );
}
