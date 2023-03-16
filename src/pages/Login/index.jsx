import { Card, Row, Col } from 'antd';
import background from '@/assets/images/login-bg.png';
import logo from '@/assets/images/new-Logo.png';
import { Outlet, useLocation } from 'react-router-dom';

export default function LoginMain() {
  require('@/styles/Login.scss');
  const location = useLocation();

  return (
    <div className="container mb-7">
      <div className=" flex justify-center">
        <img src={logo} alt=""></img>
      </div>
      <Row>
        <Col offset={4} span={7}>
          <img src={background} alt=""></img>
        </Col>
        <Col offset={4} span={7}>
          <Card
            bordered="false"
            title={
              location.pathname === '/signup'
                ? '註冊會員'
                : location.pathname === '/login'
                ? '會員登入'
                : location.pathname === '/forgetpassword'
                ? '忘記密碼'
                : ''
            }
            className="bg-[#FFFFFF86] rounded-[1.5rem]"
            headStyle={{ borderBottom: 0, fontSize: 20, fontWeight: 400 }}
            bodyStyle={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <Outlet />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
