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
        <Descriptions.Item label="Project Name">Furniro</Descriptions.Item>
        <Descriptions.Item label="Created date">2023-11-20</Descriptions.Item>
        <Descriptions.Item label="Note">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dui
          leo, cursus id malesuada sit amet, ultricies sed nisi. Maecenas a
          velit elementum, tincidunt arcu facilisis, luctus massa.
        </Descriptions.Item>
      </Descriptions>
    </Drawer>
  );
};

export default View;
