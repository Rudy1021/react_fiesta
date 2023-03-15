import Navbar from './Navbar/index';
import headerImage from '@/assets/images/index-bg.png';
import { Row, Col } from 'antd';

export default function Header() {
  require('@/styles/Header.scss');
  return (
    <div>
      <Navbar />
      <Row>
        <Col span={12} className="text-center my-auto">
          <h1 className="text-5xl">Fiesta 大學生的活動幫手</h1>
          <h1 className="text-2xl">O2O社群網路x活動籌備資訊整合平台</h1>
        </Col>
        <Col span={12}>
          <img src={headerImage}></img>
        </Col>
      </Row>
    </div>
  );
}
