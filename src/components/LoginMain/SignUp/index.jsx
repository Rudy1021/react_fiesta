import { Button, Checkbox, Form, Input, DatePicker } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
export default function SignUp() {
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
      >
        <Input placeholder="請輸入密碼" />
      </Form.Item>
      <Form.Item
        label="真實姓名"
        name="name"
        rules={[{ required: true, message: '請輸入真實姓名！' }]}
      >
        <Input placeholder="請輸入真實姓名" />
      </Form.Item>
      <Form.Item
        label="出生日期"
        name="birth"
        rules={[{ required: true, message: '請輸入正確日期！' }]}
      >
        <DatePicker
          style={{ width: '100%', height: '2.5rem', fontSize: '1.2rem' }}
          placeholder="請選擇出生日期"
        />
      </Form.Item>
      <Form.Item
        label="學校/一般信箱"
        name="mail"
        rules={[{ required: true, message: '請輸入信箱！' }]}
      >
        <Input placeholder="請輸入信箱" />
      </Form.Item>
      <Form.Item
        label="手機號碼"
        name="phone"
        rules={[{ required: true, message: '請輸入手機號碼！' }]}
      >
        <Input placeholder="請輸入手機號碼" />
      </Form.Item>
      <Form.Item label="所屬學校" name="school">
        <Input placeholder="學生才需填寫" />
      </Form.Item>
      <Form.Item>
        <Checkbox />
        <span>
          我同意<a href="#">隱私權與個人資料保護政策</a>
        </span>
      </Form.Item>
      <Form.Item>
        <Button
          block
          className="bg-white border-0 shadow-md h-12 text-lg text-[#FFA73A]"
        >
          註冊
        </Button>
      </Form.Item>
      <Form.Item className="justify-center flex">
        <a href="/login">已有帳號？點擊這裡登入！</a>
      </Form.Item>
    </Form>
  );
}
