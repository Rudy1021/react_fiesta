import Header from '@/components/Header';
import { Input, Row, Col, Button, Card } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
export default function Home() {
  return (
    <div>
      <Header />
      <div className="text-center mt-5">
        <Button className="bg-[#FFB559] text-white h-11 w-44 rounded-3xl">
          <FontAwesomeIcon icon={faHeart} />
          選擇您的興趣
        </Button>
      </div>
    </div>
  );
}
