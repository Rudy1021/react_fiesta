import Header from '@/components/Header';
import { Row, Col, Button, Card, Carousel } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import cardImage from '@/assets/images/cardImage.JPG';
import cardImage2 from '@/assets/images/cardImage2.JPG';
const { Meta } = Card;
export default function Home() {
  require('@/styles/Home.scss');
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-b from-[#FEDCC2] to-white">
        <Header />
      </div>
      <div className="text-center mt-5">
        <Button className="bg-[#FFB559] text-white h-11 w-44 rounded-3xl">
          <FontAwesomeIcon icon={faHeart} />
          <span className="text-lg">選擇您的興趣</span>
        </Button>
      </div>
      <Carousel afterChange={onchange} autoplay="true" className="mt-10">
        <div>
          <Row className="mx-40">
            <Col>
              <Card
                style={{ width: 240 }}
                cover={<img alt="" src={cardImage}></img>}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col offset={1}>
              <Card
                style={{ width: 240 }}
                cover={<img alt="" src={cardImage}></img>}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col offset={1}>
              <Card
                style={{ width: 240 }}
                cover={<img alt="" src={cardImage}></img>}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col offset={1}>
              <Card
                style={{ width: 240 }}
                cover={<img alt="" src={cardImage}></img>}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          </Row>
        </div>
        <div>
          <Row className="mx-40">
            <Col>
              <Card
                style={{ width: 240 }}
                cover={<img alt="" src={cardImage}></img>}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col offset={1}>
              <Card
                style={{ width: 240 }}
                cover={<img alt="" src={cardImage}></img>}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col offset={1}>
              <Card
                style={{ width: 240 }}
                cover={<img alt="" src={cardImage}></img>}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
            <Col offset={1}>
              <Card
                style={{ width: 240 }}
                cover={<img alt="" src={cardImage}></img>}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          </Row>
        </div>
      </Carousel>
      <div className="bg-[#FFB559] mt-20">
        <Row>
          <Col offset={2} className="my-auto">
            <h2 className="text-4xl">熱門活動</h2>
          </Col>
          <Col offset={2} className="my-auto">
            <Card
              style={{ width: 240 }}
              cover={
                <div style={{ height: 240 }}>
                  <img alt="" src={cardImage2} className="h-full"></img>
                </div>
              }
              bodyStyle={{ padding: 0 }}
              className="mt-10 h-full mb-2"
            ></Card>
            <h2 className="text-center text-white text-2xl">haha</h2>
          </Col>
          <Col offset={2} className="my-auto">
            <Card
              style={{ width: 240 }}
              cover={
                <div style={{ height: 240 }}>
                  <img alt="" src={cardImage2} className="h-full"></img>
                </div>
              }
              bodyStyle={{ padding: 0 }}
              className="mt-10 h-full mb-2"
            ></Card>
            <h2 className="text-center text-white text-2xl">haha</h2>
          </Col>
          <Col offset={2} className="my-auto">
            <Card
              style={{ width: 240 }}
              cover={
                <div style={{ height: 240 }}>
                  <img alt="" src={cardImage2} className="h-full"></img>
                </div>
              }
              bodyStyle={{ padding: 0 }}
              className="mt-10 h-full mb-2"
            ></Card>
            <h2 className="text-center text-white text-2xl">haha</h2>
          </Col>
        </Row>
      </div>
      <div className="text-center">
        <Button className="bg-[#FFB559] mt-10 text-white h-11 w-44 rounded-3xl">
          您可能喜歡的活動
        </Button>
      </div>
    </div>
  );
}
