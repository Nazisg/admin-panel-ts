import { Button, Col, Divider, Form, Input, List, Row, Typography } from "antd";
import "./ChangePassword.module.scss";
import styles from "./ChangePassword.module.scss";

const ChangePassword = () => {
  const data = [
    "Minimum 8 characters long - the more, the better",
    "At least one lowercase character",
    "At least one number, symbol, or whitespace character",
  ];
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  type FieldType = {
    newPassword?: string;
    confirmPassword?: string;
  };
  return (
    <div>
      <Typography.Title className={styles.title}>
        Change Password
      </Typography.Title>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
          >
              <Form.Item<FieldType> label="New Password" name="newPassword">
                <Input placeholder="********" size="large" />
              </Form.Item>
              <Form.Item<FieldType>
                label="Confirm Password"
                name="confirmPassword"
              >
                <Input placeholder="********" size="large" />
              </Form.Item>

            <Button type="primary" htmlType="submit">
              Change Password
            </Button>
          </Form>
        </Col>
        <Col span={12}>
          <List
            header={<b>Password Requirements:</b>}
            bordered
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <Typography.Text>*</Typography.Text> {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ChangePassword;
