import { Button, Form, Image, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import logo from "shared/media/imgs/crocusoft-logo.png";
import styles from "./Login..module.scss";
export default function Login() {
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    navigate("/");
  };

  return (
    <div className={styles.loginBg}>
      <Form onFinish={onFinish} layout="vertical" className={styles.form}>
        {/* <Typography.Title className={styles.titleLogo}>
          <Image preview={false} src={logo} />
          Crocusoft CRM
        </Typography.Title> */}
        <Typography.Title className={styles.title}>Login</Typography.Title>
        <Form.Item name={"mail"} label="Email">
          <Input placeholder="example@crocusoft.com" size="large" />
        </Form.Item>
        <Form.Item name={"password"} label="Password">
          <Input.Password type="password" placeholder="Password" size="large" />
        </Form.Item>
        <Form.Item>
          <Link to="/forgot-password" className={styles.forgot}>
            Forgot password
          </Link>
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.submit}
          size="large"
          block
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}
