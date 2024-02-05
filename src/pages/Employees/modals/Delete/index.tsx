import { Modal } from "antd";
import React from "react";
import { ActionModalProps } from "shared/types";
const Delete: React.FC<ActionModalProps> = ({ modalOpen, setModalOpen }) => {
  return (
    <>
      <Modal
        // centered
        title="Do you want to delete this employee?"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={() => setModalOpen(false)}
        okType="danger"
      ></Modal>
    </>
  );
};

export default Delete;
