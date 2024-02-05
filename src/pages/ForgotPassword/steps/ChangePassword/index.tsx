import { Button, Form, Input, Typography } from "antd";
import styles from "./ChangePassword.module.scss";

const ChangePassword = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  return (
    <Typography className={styles.changePage}>
      <Form
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
        className={styles.changeForm}
      >
        <Form.Item label="New Password" name="newPassword">
          <Input.Password placeholder="********" size="large" />
        </Form.Item>
        <Form.Item label="Confirm Password" name="confirmPassword">
          <Input.Password placeholder="********" size="large" type="password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Update Password
        </Button>
      </Form>
    </Typography>
  );
};

export default ChangePassword;
