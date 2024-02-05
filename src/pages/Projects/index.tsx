import {
  EditOutlined,
  EyeOutlined,
  FilterOutlined,
  PlusOutlined,
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
import { ProjectType } from "shared/types";
import ActionButton from "src/shared/components/ActionButton";
import Filter from "src/shared/components/Filter";
import styles from "./Projects.module.scss";
import ProjectModal from "./modals/";

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState<
    "view" | "delete" | "update" | "create" | "resetPassword"
  >("view");

  const handleCreate = () => {
    setModalOpen(true);
    setStatus("create");
  };
  const columns: TableColumnsType<ProjectType> = [
    {
      title: "Project",
      dataIndex: "project",
      ellipsis: true,
      sorter: (a, b) => a.project.localeCompare(b.project),
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
  const data: ProjectType[] = [
    {
      key: "1",
      project: "Furniro",
      employees: [
        { name: "Nazrin", surname: "Isgandarova" },
        { name: "Lale", surname: "Qarayeva" },
      ],
    },
    {
      key: "2",
      project: "Plast",
      employees: [
        { name: "Rahman", surname: "Aliyev" },
        { name: "Musa", surname: "Agali" },
      ],
    },
    {
      key: "3",
      project: "CRM",
      employees: [
        { name: "Aytac", surname: "Qarayev" },
        { name: "Murad", surname: "Hasanli" },
      ],
    },
  ];
  return (
    <>
      <Flex align="baseline" gap="small" className={styles.header}>
        <Typography.Title className="title">Projects</Typography.Title>
        <Flex justify="flex-end" align="center" gap="small">
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
        className="table"
        scroll={{ y: 300, x: "auto" }}
        columns={columns}
        dataSource={data}
      />
      <ProjectModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        statusType={status}
      />
      <Filter
        modalOpen={filterOpen}
        setModalOpen={setFilterOpen}
        statusType="project"
      />
    </>
  );
}
