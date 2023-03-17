import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function Login() {
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      layout="vertical"
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="帳號"
        name="username"
        rules={[
          {
            required: true,
            message: '請輸入帳號！',
          },
        ]}
      >
        <Input placeholder="請輸入帳號" />
      </Form.Item>
      <Form.Item
        label="密碼"
        name="password"
        rules={[{ required: true, message: '請輸入密碼！' }]}
        className="mb-0"
      >
        <Input placeholder="請輸入密碼" />
      </Form.Item>
      <Form.Item className="flex justify-end">
        <Link to="/forgetpassword">忘記密碼</Link>
      </Form.Item>
      <Form.Item>
        <Button
          block
          className="bg-white border-0 shadow-md h-12 text-lg text-[#FFA73A]"
          htmlType="submit"
        >
          登入
        </Button>
      </Form.Item>
      <Form.Item className="flex justify-center">
        <Link to="/signup">還沒有會員嗎？點擊這裡註冊！</Link>
      </Form.Item>
    </Form>
  );
}
