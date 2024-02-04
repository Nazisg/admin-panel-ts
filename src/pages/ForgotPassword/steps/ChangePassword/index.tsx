import { Button, Form, Input, Typography } from "antd";
import styles from "./ChangePassword.module.scss";
const index = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };
  type FieldType = {
    newPassword?: string;
    confirmPassword?: string;
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
        <Form.Item<FieldType> label="New Password" name="newPassword">
          <Input placeholder="********" size="large" />
        </Form.Item>
        <Form.Item<FieldType> label="Confirm Password" name="confirmPassword">
          <Input placeholder="********" size="large" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Change Password
        </Button>
      </Form>
    </Typography>
  );
};

export default index;
