import { ModalProps } from "shared/types";
import Create from "./Create";
import Update from "./Update";
import View from "./View";

const ReportModal: React.FC<ModalProps> = ({
  statusType,
  modalOpen,
  setModalOpen,
}) => {
  const status = {
    view: <View modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    update: <Update modalOpen={modalOpen} setModalOpen={setModalOpen} />,
    create: <Create modalOpen={modalOpen} setModalOpen={setModalOpen} />,
  };
  return statusType !== "resetPassword" && statusType !== "delete"
    ? status[statusType]
    : null;
};

export default ReportModal;
