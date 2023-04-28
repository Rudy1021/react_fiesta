import { Button, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { login } from '@/api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const onFinish = async (values) => {
  const MySwal = withReactContent(Swal);
  const res = await login(values);
  if (res.status === 200) {
    // window.location.assign('/');
    console.log(res);
  } else {
    MySwal.fire({
      title: <strong>警告</strong>,
      html: <i>帳號或密碼錯誤</i>,
      icon: 'warning',
    });
  }
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const shouldRedirect = false;

  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/');
    }
  });

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
        visibilityToggle={{
          visible: passwordVisible,
          onVisibleChange: setPasswordVisible,
        }}
      >
        <Input.Password placeholder="請輸入密碼" />
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
