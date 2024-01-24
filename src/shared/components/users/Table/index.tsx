import { DeleteOutlined, EditOutlined,UserOutlined } from "@ant-design/icons";
import type { TableProps } from "antd";
import { Avatar, Space, Table, Tag } from "antd";
import "./style.scss";
export default function index() {
  interface DataType {
    key: string;
    name: string;
    surname: string;
    username: string;
    mail: string;
    team: string;
    role: string;
    status: string;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <>
          <Avatar  icon={<UserOutlined />} alt="Avatar" />
          <a style={{marginLeft:10}}>{text}</a>
        </>
      ),
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Mail",
      dataIndex: "mail",
      key: "mail",
    },
    {
      title: "Team",
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
      render: (_, { status }) => {
        let color;
        if (status === "active") {
          color = "green";
        } else if (status === "deactive") {
          color = "volcano";
        }

        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <EditOutlined />
          <DeleteOutlined />
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "Nazrin",
      surname: "Isgandarova",
      username: "Nazisg",
      mail: "nazrin@gmail.com",
      team: "Frontend",
      role: "User",
      status: "active",
    },
    {
      key: "2",
      name: "Rahman",
      surname: "Aliyev",
      username: "Rahali",
      mail: "rahman@gmail.com",
      team: "Backend",
      role: "User",
      status: "active",
    },
    {
      key: "3",
      name: "Sevinc",
      surname: "Mahmudlu",
      username: "Sevmah",
      mail: "mahmudlu@gmail.com",
      team: "UX/UI Design",
      role: "User",
      status: "deactive",
    },
  ];

  return (
    <div>
      <Table className="table" columns={columns} dataSource={data} />
    </div>
  );
}
