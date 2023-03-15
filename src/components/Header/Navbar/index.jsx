import logo from '@/assets/images/new-Logo.png';
import { Input, Row, Col, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faLocationDot,
  faFire,
} from '@fortawesome/free-solid-svg-icons';
const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function Navbar() {
  return (
    <Row align="middle">
      <Col offset={1} span={1}>
        <img src={logo} alt=""></img>
      </Col>
      <Col offset={1} span={3}>
        <Search
          placeholder="搜尋想要的活動名稱"
          className="rounded"
          onSearch={onSearch}
          block
        />
      </Col>
      <Col offset={12} span={1} className="text-center pl-4">
        <div>
          <FontAwesomeIcon icon={faHouse} />
          <span>首頁</span>
        </div>
      </Col>
      <Col span={1} className="text-center ml-3">
        <FontAwesomeIcon icon={faFire} />
        <span>熱門活動</span>
      </Col>
      <Col span={1} className="text-center ml-3">
        <FontAwesomeIcon icon={faLocationDot} />
        <span>周遭活動</span>
      </Col>
      <Col span={1} className="ml-3">
        <a href="/login">
          <Button className="border-white rounded-3xl" block>
            登入
          </Button>
        </a>
      </Col>
      <Col span={1} className="ml-3">
        <a href="/signup">
          <Button className="border-white rounded-3xl" block>
            註冊
          </Button>
        </a>
      </Col>
    </Row>
  );
}
