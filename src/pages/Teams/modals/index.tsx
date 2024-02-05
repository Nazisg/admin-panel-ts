import { ModalProps } from "shared/types";
import Create from "./Create";
import Delete from "./Delete";
import Update from "./Update";
import View from "./View";

const TeamModal: React.FC<ModalProps> = ({
  statusType,
  modalOpen,
  setModalOpen,
}) => {
  const status = {
    view: <View modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    update: <Update modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    delete: <Delete modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    create: <Create modalOpen={modalOpen} setModalOpen={setModalOpen} />,
  };
  return statusType !== "resetPassword" ? status[statusType] : null;
};

export default TeamModal;
