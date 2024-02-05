import {
  EditOutlined,
  EyeOutlined,
  FilterOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Flex,
  Space,
  Table,
  TableColumnsType,
  Tooltip,
  Typography,
} from "antd";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { ReportType } from "shared/types";
import ActionButton from "src/shared/components/ActionButton";
import Filter from "src/shared/components/Filter";
import ReportModal from "./modals";
import styles from "./DailyReport.module.scss";

export default function DailyReport() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState<
    "view" | "update" | "create" | "delete" | "resetPassword"
  >("view");

  const handleCreate = () => {
    setModalOpen(true);
    setStatus("create");
  };

  const columns: TableColumnsType<ReportType> = [
    {
      title: "Employee",
      dataIndex: "employee",
      ellipsis: true,
      sorter: (a, b) => a.employee.localeCompare(b.employee),
    },
    {
      title: "Project",
      dataIndex: "projectName",
      ellipsis: true,
    },
    {
      title: "Created Date",
      dataIndex: "createdDate",
      ellipsis: true,
    },
    {
      title: "Note",
      dataIndex: "note",
      ellipsis: true,
      render: (text) => <p>{text.slice(0, 20) + "..."}</p>,
    },
    {
      title: "Action",
      key: "action",
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
        </Space>
      ),
    },
  ];
  const data: ReportType[] = [
    {
      key: "1",
      employee: "Nazrin Isgandarova",
      projectName: "Furniro",
      createdDate: "2023-11-20",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui leo, cursus id malesuada sit amet, ultricies sed nisi.  ",
    },
    {
      key: "2",
      employee: "Rahman Aliyev",
      projectName: "CRM",
      createdDate: "2023-11-20",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui leo, cursus id malesuada sit amet, ultricies sed nisi. Maecenas a velit elementum, tincidunt arcu facilisis, luctus massa.",
    },
    {
      key: "3",
      employee: "Sevic Musali",
      projectName: "Plast",
      createdDate: "2023-10-27",
      note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui leo, cursus id malesuada sit amet, ultricies sed nisi. Maecenas a velit elementum, tincidunt arcu facilisis, luctus massa.",
    },
  ];

  return (
    <>
      <Flex align="baseline" gap="small" className={styles.header}>
        <Typography.Title className="title">Daily Report</Typography.Title>
        <Flex
          justify="flex-end"
          align="center"
          gap="small"
          className={styles.btns}
        >
          <Button
            onClick={() => setFilterOpen(true)}
            icon={<FilterOutlined />}
            size="large"
            type="primary"
            ghost
          >
            Filter
          </Button>
          <Flex gap="small">
            <Button icon={<UploadOutlined />} ghost type="primary" size="large">
              Export
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
      </Flex>
      <Table
        bordered
        className="table"
        scroll={{ y: 300, x: "auto" }}
        columns={columns}
        dataSource={data}
      />
      <ReportModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        statusType={status}
      />
      <Filter
        modalOpen={filterOpen}
        setModalOpen={setFilterOpen}
        statusType="report"
      />
    </>
  );
}
