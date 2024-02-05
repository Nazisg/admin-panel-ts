import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  FilterOutlined,
  LockOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Button,
  Flex,
  Space,
  Table,
  TableColumnsType,
  Tag,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import ActionButton from "shared/components/ActionButton/index";
import { EmployeeType } from "shared/types";
import Filter from "src/shared/components/Filter";
import EmployeeModal from "../Employees/modals/index";
import styles from "./Employees.module.scss";

export default function index() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState<
    "view" | "delete" | "update" | "create" | "resetPassword"
  >("view");

  const handleCreate = () => {
    setModalOpen(true);
    setStatus("create");
  };

  // const [status, setStatus] = useState<"active" | "deactive">("active");

  const columns: TableColumnsType<EmployeeType> = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => (
        <>
          {/* <Avatar icon={<EmployeeOutlined />} alt="Avatar" /> */}
          <p style={{ marginLeft: 10 }}>{text}</p>
        </>
      ),
    },
    {
      title: "Surname",
      dataIndex: "surname",
      ellipsis: true,
      sorter: (a, b) => a.surname.localeCompare(b.surname),
    },
    {
      title: "Mail",
      dataIndex: "mail",
      ellipsis: true,
    },
    {
      title: "Teams",
      dataIndex: "team",
      ellipsis: true,
    },
    {
      title: "Role",
      dataIndex: "role",
      ellipsis: true,
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ellipsis: true,
      render: (_, { status }) => (
        <Tag color={status ? "green" : "red"}>
          {status ? "ACTIVE" : "DEACTIVE"}
        </Tag>
      ),
    },
    {
      title: "Action",
      ellipsis: true,
      render: () => (
        <Space size="small">
          <ActionButton
            setStatus={setStatus}
            setModalOpen={setModalOpen}
            title="View"
            icon={<EyeOutlined />}
            type="btnView"
          />
          <ActionButton
            setStatus={setStatus}
            setModalOpen={setModalOpen}
            title="Update"
            icon={<EditOutlined />}
            type="btnUpdate"
          />
          <ActionButton
            setStatus={setStatus}
            setModalOpen={setModalOpen}
            title="ResetPassword"
            icon={<LockOutlined />}
            type="btnReset"
          />
          <ActionButton
            setStatus={setStatus}
            setModalOpen={setModalOpen}
            title="Delete"
            icon={<DeleteOutlined />}
            type="btnDel"
          />
        </Space>
      ),
    },
  ];
  const data: EmployeeType[] = [
    {
      key: "1",
      name: "Nazrin",
      surname: "Isgandarova",
      mail: "naz@crocusoft.az",
      team: "Frontend",
      role: "Employee",
      status: true,
    },
    {
      key: "2",
      name: "Rahman",
      surname: "Aliyev",
      mail: "rah@crocusoft.az",
      team: "Backend",
      role: "Employee",
      status: true,
    },
    {
      key: "3",
      name: "Sevinc",
      surname: "Mahmudlu",
      mail: "sev@crocusoft.az",
      team: "UX/UI Design",
      role: "Employee",
      status: false,
    },
  ];

  return (
    <>
      <EmployeeModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        statusType={status}
      />
      <Flex align="baseline" gap="small" className={styles.header}>
        <Typography.Title className="title">Employees</Typography.Title>
        <Flex gap="small" justify="flex-end">
          <Button
            onClick={() => setFilterOpen(true)}
            icon={<FilterOutlined />}
            size="large"
            type="primary"
            ghost
          >
            Filter
          </Button>
          <Tooltip placement="top" title="Create">
            <Button
              onClick={handleCreate}
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
        scroll={{ y: "300px", x: "auto" }}
        columns={columns}
        dataSource={data}
      />
      <Filter
        modalOpen={filterOpen}
        setModalOpen={setFilterOpen}
        statusType="employee"
      />
    </>
  );
}
