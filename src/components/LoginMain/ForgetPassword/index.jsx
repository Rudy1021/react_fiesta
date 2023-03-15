import { Form, Input, Button } from 'antd';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function success() {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: <strong>認證信已成功寄出，請前往您的信件收信！</strong>,
    html: <i>信件寄出需要1-2分鐘的時間，若您沒有收到信件 請點選下方按鈕。</i>,
    icon: 'success',
  });
}

export default function ForgetPassWord() {
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
      autoComplete="off"
    >
      <Form.Item label="帳號">
        <Input placeholder="請輸入帳號" />
      </Form.Item>

      <Form.Item>
        <Button
          onClick={success}
          className="bg-white border-0 shadow-md h-12 text-lg text-[#FFA73A]"
          block
        >
          送出
        </Button>
      </Form.Item>
    </Form>
  );
}
