import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from './style..module.scss'
export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/dashboard");
  };

  return (
    <div className={styles.loginBg}>
      <Form
        className={styles.form}
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Title className={styles.title}>Login</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          name={"userName"}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          name={"password"}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </div>
  );
}
