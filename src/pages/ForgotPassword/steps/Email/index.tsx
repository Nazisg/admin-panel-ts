import { Button, Form, Input, Typography } from "antd";
import styles from "./Email.module.scss";

const Email = () => {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Typography className={styles.emailPage}>
      <Form onFinish={onFinish} layout="vertical" className={styles.emailForm}>
        <Form.Item name={"mail"} label="Enter your email">
          <Input placeholder="example@crocusoft.com" size="large" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submit}
            size="large"
            block
          >
            Reset Password
          </Button>
        </Form.Item>
      </Form>
    </Typography>
  );
};

export default Email;
