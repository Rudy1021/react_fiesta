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
      <Col offset={1} span={4}>
        <Search
          placeholder="搜尋想要的活動名稱"
          className="rounded w-full"
          onSearch={onSearch}
        />
      </Col>
      <Col offset={8} span={2} className="text-center pl-4">
        <div>
          <span>
            <FontAwesomeIcon icon={faHouse} />
            首頁
          </span>
        </div>
      </Col>
      <Col span={2} className="text-center ml-3">
        <span>
          <FontAwesomeIcon icon={faFire} />
          熱門活動
        </span>
      </Col>
      <Col span={2} className="text-center ml-3">
        <span>
          <FontAwesomeIcon icon={faLocationDot} />
          周遭活動
        </span>
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
