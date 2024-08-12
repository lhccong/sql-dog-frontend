import React, {useEffect, useState} from "react";
import {Button, Card, Col, List, Row} from "antd";
import {listTopicVoByPage} from "@/services/backend/topicLevelController";
import {useNavigate} from 'react-router-dom'; // 用于跳转
const LevelIndex: React.FC = () => {
  const [currentSystemPage, setCurrentSystemPage] = useState(1); // 用于存储当前页码
  const [currentSystemTotal, setCurrentSystemTotal] = useState(1); // 用于存储当前页码
  const [currentCustomTotal, setCurrentCustomTotal] = useState(1); // 用于存储当前页码
  const [currentCustomPage, setCurrentCustomPage] = useState(1); // 用于存储当前页码
  const [topicCustomData, setTopicCustomData] = useState<API.TopicVo[]>(); // 用于存储当前页码
  const [topicSystemData, setTopicSystemData] = useState<API.TopicVo[]>(); // 用于存储当前页码

  const getSystemTopicData = async () => {
    await listTopicVoByPage({type: "system", current: currentSystemPage}).then(res => {
      console.log("收到数据啦：", res.data)
      setTopicSystemData(res.data?.records as API.TopicVo[]);
      setCurrentSystemTotal(res.data?.total as any)
    })
  }
  const getCustomTopicData = async () => {
    await listTopicVoByPage({type: "custom", current: currentCustomPage}).then(res => {
      console.log("收到数据啦：", res.data)
      setTopicCustomData(res.data?.records as API.TopicVo[]);
      setCurrentCustomTotal(res.data?.total as any)

    })
  }
  const navigate = useNavigate();

  const toDetail = (jumpId: any) => {
    // 跳转到 LevelsPage，并传递 id 参数
    navigate(`/study/${jumpId}`); // 这里的 1 是你想要传递的 id
  };


  useEffect(() => {
    getCustomTopicData();
  }, [currentCustomPage]);

  useEffect(() => {
    getSystemTopicData();
  }, [currentSystemPage]);

  const onPageSystemChange = (page: React.SetStateAction<number>) => {
    setCurrentSystemPage(page); // 更新当前页码
  };
  const onPageCustomChange = (page: React.SetStateAction<number>) => {
    setCurrentCustomPage(page); // 更新当前页码
  };

  const style: React.CSSProperties = {padding: '8px 0'};
  return (
    <Row gutter={16}>
      <Col className="gutter-row" span={12}>
        <div style={style}>
          <Card title={"主线关卡"}>
            <List
              pagination={{total: currentSystemTotal, pageSize: 10, onChange: onPageSystemChange}}
              itemLayout="horizontal"
              dataSource={topicSystemData as API.TopicVo[]}
              renderItem={(item) => (
                <List.Item extra={<Button onClick={() => toDetail(item.id)}>挑战</Button>}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
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
              pagination={{total: currentCustomTotal, pageSize: 10, onChange: onPageCustomChange}}
              dataSource={topicCustomData as API.TopicVo[]}
              renderItem={(item) => (
                <List.Item extra={<Button onClick={() => toDetail(item.id)}>挑战</Button>}>
                  <List.Item.Meta
                    title={<a href="https://ant.design">{item.title}</a>}
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
