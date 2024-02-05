import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
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
import ActionButton from "src/shared/components/ActionButton";
import Filter from "src/shared/components/Filter";
import { TeamType } from "src/shared/types";
import TeamModal from "./modals/index";

export default function Teams() {
  const [modalOpen, setModalOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [status, setStatus] = useState<
    "view" | "update" | "create" | "delete" | "resetPassword"
  >("view");

  const handleCreate = () => {
    setModalOpen(true);
    setStatus("create");
  };

  const columns: TableColumnsType<TeamType> = [
    {
      title: "Team",
      dataIndex: "team",
      ellipsis: true,
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
  const data: TeamType[] = [
    {
      key: "1",
      team: "Frontend",
      employees: [
        { name: "Nazrin", surname: "Isgandarova" },
        { name: "Lale", surname: "Qarayeva" },
      ],
    },
    {
      key: "2",
      team: "Backend",
      employees: [
        { name: "Rahman", surname: "Aliyev" },
        { name: "Musa", surname: "Agali" },
      ],
    },
    {
      key: "3",
      team: "Mobile",
      employees: [
        { name: "Aytac", surname: "Qarayev" },
        { name: "Murad", surname: "Hasanli" },
      ],
    },
    {
      key: "4",
      team: "UX/UI Design",
      employees: [
        { name: "GulPeri", surname: "Rustemli" },
        { name: "Samir", surname: "Huseynli" },
      ],
    },
  ];

  return (
    <>
      <Flex justify="space-between" align="baseline">
        <Typography.Title className="title">Teams</Typography.Title>
        <Flex justify="flex-end" align="center" gap="middle">
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
      <TeamModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        statusType={status}
      />
      <Filter
        modalOpen={filterOpen}
        setModalOpen={setFilterOpen}
        statusType="team"
      />
    </>
  );
}
