import React from "react";
import "./style.scss";
import { Button, Form, Input, Typography } from "antd";
export default function Login() {
  return (
    <div className="login-bg">
      <Form className="form">
        <Typography.Title>Login</Typography.Title>
        <Form.Item
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          label="User name"
          name={"userName"}
        >
          <Input placeholder="Enter your user name" />
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "",
            },
          ]}
          label="Password"
          name={"password"}
        >
          <Input.Password placeholder="Enter your user password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
      </Form>
    </div>
  );
}
