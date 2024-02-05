import { Descriptions, Drawer } from "antd";
import { ActionModalProps } from "shared/types";

const View: React.FC<ActionModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <Drawer
      title="View Employee"
      onClose={() => setModalOpen(false)}
      open={modalOpen}
    >
      <Descriptions layout="vertical" bordered column={1}>
        <Descriptions.Item label="Name">Nazrin</Descriptions.Item>
        <Descriptions.Item label="Surnmae">Isgandarova</Descriptions.Item>
        <Descriptions.Item label="Email">naz@crocusoft.com</Descriptions.Item>
        <Descriptions.Item label="Team">Frontend</Descriptions.Item>
        <Descriptions.Item label="Role">Employee </Descriptions.Item>
        <Descriptions.Item label="Status">Active</Descriptions.Item>
        <Descriptions.Item label="Projects">
          Plast, Furniro, CRM
        </Descriptions.Item>
      </Descriptions>
    </Drawer>
  );
};

export default View;
