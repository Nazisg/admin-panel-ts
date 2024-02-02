import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Login..module.scss";
import loginImg from "shared/media/imgs/login-img.png";
export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/dashboard");
  };

  return (
    <div className={styles.loginBg}>
      <div className={styles.logo}>
        <Image preview={false} src={loginImg} />
      </div>
      <div className={styles.form}>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Typography.Title className={styles.title}>Login</Typography.Title>
          <Form.Item name={"mail"} label="Email">
            <Input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="example@crocusoft.com"
              size="large"
            />
          </Form.Item>
          <Form.Item name={"password"}>
            <Input.Password
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submit}
            block
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
