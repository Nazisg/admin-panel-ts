import { Descriptions, Drawer } from "antd";
import { ActionModalProps } from "shared/types";

const View: React.FC<ActionModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <Drawer
      title="View Project"
      onClose={() => setModalOpen(false)}
      open={modalOpen}
    >
      <Descriptions layout="vertical" bordered column={1}>
        <Descriptions.Item label="Project">Frontend</Descriptions.Item>
        <Descriptions.Item label="Employees">
          Nazrin Isgandarova, Rahman Aliyev
        </Descriptions.Item>
      </Descriptions>
    </Drawer>
  );
};

export default View;
