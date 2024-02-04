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
      <Form.Item name="otp">
        <InputOTP autoSubmit={form} size="large" inputType="numeric" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          Submit
        </Button>
      </Form.Item>
    </Form>
   </Typography>
  );
};
export default OTP;
