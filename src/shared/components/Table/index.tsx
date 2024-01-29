import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  LockOutlined,
  UserOutlined
} from "@ant-design/icons";
import type { TableProps } from "antd";
import { Avatar, Button, Modal, Space, Table, Tag, Tooltip } from "antd";
import { useState } from "react";
import EditUserModal from "src/shared/components/EditUserModal";
import ViewModal from "src/shared/components/ViewModal";
import styles from "./style.module.scss";
export default function index() {
  
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
          <Avatar icon={<UserOutlined />} alt="Avatar" />
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
    <div>
      <Table
        bordered
        className={styles.table}
        columns={columns}
        dataSource={data}
      />
      {/* <EditUserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <ViewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
    </div>
  );
}
