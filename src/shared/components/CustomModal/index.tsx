import { Modal } from "antd";
import React from "react";

interface CustomModalProps {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
  children,
}) => {
  return (
    <Modal
      title="Create Employee"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      centered
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
