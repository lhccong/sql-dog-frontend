import React from "react";
import {Button, Card, Col, List, Row} from "antd";

const LevelIndex: React.FC = () => {
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  const style: React.CSSProperties = {padding: '8px 0'};
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Card title={"主线关卡"}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item extra={<Button>挑战</Button>}>
                  <List.Item.Meta
                    // avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </Col>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Card title={"自定义关卡"}>
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item extra={<Button>挑战</Button>}>
                  <List.Item.Meta
                    // avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}/>}
                    title={<a href="https://ant.design">{item.title}</a>}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </Col>
    </Row>

  )
};
export default LevelIndex;
