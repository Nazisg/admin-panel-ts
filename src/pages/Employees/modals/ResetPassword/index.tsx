import { Button, Flex, Form, Input, Modal } from "antd";
import { ActionModalProps } from "shared/types";

const ResetPassword: React.FC<ActionModalProps> = ({
  modalOpen,
  setModalOpen,
}) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <Modal
      title="Reset Password"
      open={modalOpen}
      onOk={() => setModalOpen(false)}
      okButtonProps={{ style: { display: "none" } }}
      cancelButtonProps={{ style: { display: "none" } }}
      onCancel={() => setModalOpen(false)}
      centered
    >
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item label="New Password" name="newPassword">
          <Input placeholder="********" size="large" />
        </Form.Item>
        <Form.Item label="Confirm Password" name="confirmPassword">
          <Input placeholder="********" size="large" />
        </Form.Item>
        <Flex justify="end">
          <Button type="primary" htmlType="submit">
            Reset Password
          </Button>
        </Flex>
      </Form>
    </Modal>
  );
};

export default ResetPassword;
