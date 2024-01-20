import React from "react";
import "./style.scss";
import { Button, Form, Input, Typography } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
export default function Login() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="login-bg">
      <Form
        className="form"
        name="normal_login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Typography.Title>Login</Typography.Title>
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
