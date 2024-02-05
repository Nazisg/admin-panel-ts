import { Button, Tooltip } from "antd";
import { ActionButtonProps } from "shared/types";
import styles from "./ActionButton.module.scss";

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  type,
  title,
  setModalOpen,
  setStatus,
}) => {
  const status = {
    View: "view",
    Update: "update",
    Delete: "delete",
    ResetPassword: "resetPassword",
  };

  return (
    <Tooltip placement="top" title={title}>
      <Button
        onClick={() => {
          setModalOpen(true);
          //@ts-ignore
          setStatus(status[title]);
        }}
        shape="circle"
        className={styles[type]}
      >
        {icon}
      </Button>
    </Tooltip>
  );
};

export default ActionButton;
