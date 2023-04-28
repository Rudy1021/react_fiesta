import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signUp } from '@/api';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const onFinish = async (values) => {
  console.log('Success:', values);
  const MySwal = withReactContent(Swal);
  const res = await signUp(values);
  if (res.status === 200) {
    MySwal.fire({
      title: <strong>恭喜！</strong>,
      html: <i>註冊成功！</i>,
      icon: 'success',
    }).then(() => {
      window.location.assign('/login');
    });
  } else {
    MySwal.fire({
      title: <strong>警告</strong>,
      html: <i>此帳號已有人使用！</i>,
      icon: 'warning',
    });
  }
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

export default function SignUp() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const randomNum = (min, max) => {
    setRandomNumber(Math.floor(Math.random() * (max - min + 1)));
  };

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
        terms: false,
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
        visibilityToggle={{
          visible: passwordVisible,
          onVisibleChange: setPasswordVisible,
        }}
      >
        <Input.Password placeholder="請輸入密碼" />
      </Form.Item>
      <Form.Item
        name="terms"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              new Promise((resolve, reject) =>
                !value
                  ? reject('請同意我們的隱私權與個人保護政策！')
                  : resolve()
              ),
          },
        ]}
      >
        <Checkbox>
          <span>
            我同意
            <a
              onClick={() => randomNum(1, 1766)}
              target="_blank"
              rel="noreferrer noopener"
              href={'http://random.cat/view/' + randomNumber}
            >
              隱私權與個人資料保護政策
            </a>
          </span>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          block
          className="bg-white border-0 shadow-md h-12 text-lg text-[#FFA73A]"
          htmlType="submit"
        >
          註冊
        </Button>
      </Form.Item>
      <Form.Item className="justify-center flex">
        <Link to="/login">已有帳號？點擊這裡登入！</Link>
      </Form.Item>
    </Form>
  );
}
