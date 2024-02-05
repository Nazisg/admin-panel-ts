import { Modal } from "antd";
import { ActionModalProps } from "shared/types";

const Delete: React.FC<ActionModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <Modal
      // centered
      title="Do you want to delete this Team?"
      open={modalOpen}
      onCancel={() => setModalOpen(false)}
      onOk={() => setModalOpen(false)}
      okType="danger"
    ></Modal>
  );
};

export default Delete;
