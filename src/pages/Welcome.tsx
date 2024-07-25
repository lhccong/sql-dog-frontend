import {Card, Col, Row} from 'antd';

export default () => {

  // @ts-ignore
  return (
    <>
      <Row>
        <Col span={11}><Card>1111</Card></Col>
        <Col span={12} style={{marginLeft:10}}><Card>1111</Card></Col>
      </Row>
    </>
  );
};

