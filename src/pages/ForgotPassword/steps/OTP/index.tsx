import { Button, Form, Typography } from "antd";
import { InputOTP } from "antd-input-otp";
import styles from "./OTP.module.scss";

const OTP = () => {
  const [form] = Form.useForm();

  //   const handleFinish = (values) => {
  //   };

  return (
    <Typography className={styles.otpPage}>
      <Form
        // onFinish={handleFinish}
        form={form}
        className={styles.otpForm}
      >
        <Form.Item className={styles.inputs} name="otp" style={{gap:"0.3em"}}>
          <InputOTP
            inputStyle={{padding:"4px", maxWidth:"55px"}}
            autoSubmit={form}
            size="large"
            inputType="numeric"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block size="large">
            Verify Code
          </Button>
        </Form.Item>
      </Form>
    </Typography>
  );
};
export default OTP;
