import { ModalProps } from "shared/types";
import Create from "./Create";
import Delete from "./Delete";
import ResetPassword from "./ResetPassword";
import Update from "./Update";
import View from "./View";

const EmployeeModal: React.FC<ModalProps> = ({
  statusType,
  modalOpen,
  setModalOpen,
}) => {
  const status = {
    view: <View modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    update: <Update modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    delete: <Delete modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    create: <Create modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    resetPassword: (
      <ResetPassword modalOpen={modalOpen} setModalOpen={setModalOpen} />
    ),
  };
  return status[statusType];
};

export default EmployeeModal;
