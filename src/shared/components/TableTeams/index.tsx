import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleFilled,
  EyeOutlined,
  LockOutlined,
} from "@ant-design/icons";
import type { TableProps } from "antd";
import { Button, Modal, Space, Table, Tag, Tooltip } from "antd";
import { useState } from "react";
import EditUserModal from "src/shared/components/EditUserModal";
import ViewModal from "src/shared/components/ViewModal";
// import "./style.scss";
import styles from './style.module.scss'
export default function index() {
  const [status, setStatus] = useState<"active" | "deactive">("active");

  interface DataType {
    key: string;
    name: string;
  
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
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="small">
          <Tooltip placement="top" title="view">
            <Button shape="circle" >
              <EyeOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="update">
            <Button shape="circle" >
              <EditOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="reset password">
            <Button shape="circle">
              <LockOutlined />
            </Button>
          </Tooltip>
          <Tooltip placement="top" title="delete">
            <Button shape="circle" danger >
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
      name: "Plast-blog",
    },
    {
      key: "2",
      name: "Furniro-ecommerce",

    },
    {
      key: "3",
      name: "Daily Report-Admin Panel",
   
    },
  ];

  return (
    <div>
      <Table className={styles.table} columns={columns} dataSource={data} />
      {/* <EditUserModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      /> */}
      {/* <ViewModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
    </div>
  );
}
