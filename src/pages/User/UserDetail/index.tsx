import 'monaco-editor/min/vs/editor/editor.main.css';
import React from "react";
import {useModel, useParams} from "@@/exports";
import {Avatar, Button, Card, Col, Divider, Row, Tabs, TabsProps} from "antd";
import {
  CreditCardOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  ManOutlined,
  RocketOutlined
} from "@ant-design/icons";


const UserDetail: React.FC = () => {
// 获取 URL 参数中的 id
  const {id} = useParams<{ id?: string }>();
  const {initialState} = useModel('@@initialState');
  const loginUser = initialState?.currentUser;

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '帖子',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '2',
      label: '评论',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: '笔记',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '4',
      label: '问答',
      children: 'Content of Tab Pane 1',
    },
    {
      key: '5',
      label: '专栏',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '6',
      label: '资料',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '7',
      label: '收藏',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '8',
      label: '关注',
      children: 'Content of Tab Pane 3',
    },
    {
      key: '9',
      label: '粉丝',
      children: 'Content of Tab Pane 3',
    },
  ];


  return (
    <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Card style={{width: "60vw"}}>
          <div style={{display: "flex"}}>
            <Avatar size={128} src={loginUser?.userAvatar}/>
            <div>
              <h2 style={{marginLeft: "16px", fontWeight: "bold"}}>{loginUser?.userName}</h2>
              <span style={{marginLeft: "16px", color: "gray"}}>{loginUser?.userProfile}</span>
              <div style={{marginTop: 20, display: "flex"}}>
                <div style={{marginLeft: "16px"}}>
                  <text style={{color: "blue", fontSize: 15, fontWeight: "bold", marginRight: 10}}>
                    <ManOutlined/>
                  </text>
                  男
                </div>
                <div style={{marginLeft: "16px"}}>
                  <text style={{color: "gray", fontSize: 15, fontWeight: "bold", marginRight: 10}}>
                    <EnvironmentOutlined/>
                  </text>
                  珠海市
                </div>
                <div style={{marginLeft: "16px"}}>
                  <text style={{color: "gray", fontSize: 15, fontWeight: "bold", marginRight: 10}}>
                    <CreditCardOutlined/>
                  </text>
                  后端
                </div>
                <div style={{marginLeft: "16px"}}>
                  <text style={{color: "gray", fontSize: 15, fontWeight: "bold", marginRight: 10}}>
                    <FieldTimeOutlined/>
                  </text>
                  2023
                </div>
                <div style={{marginLeft: "16px"}}>
                  <text style={{color: "gray", fontSize: 15, fontWeight: "bold", marginRight: 10}}>
                    <RocketOutlined/>
                  </text>
                  Java后端
                </div>
              </div>

            </div>
          </div>
          <div style={{display: "flex", marginLeft: 20, marginTop: 20}}>
            <span>排名: <text style={{fontSize: 18, fontWeight: "bold"}}>1</text></span>
            <Divider type="vertical"/>
            <span>积分：<text style={{fontSize: 18, fontWeight: "bold"}}>999+</text></span>
            <Divider type="vertical"/>
            <span>获赞：<text style={{fontSize: 18, fontWeight: "bold"}}>999+</text></span>
            <Divider type="vertical"/>
            <span>浏览：<text style={{fontSize: 18, fontWeight: "bold"}}>999+</text></span>
            <Divider type="vertical"/>
            <span>关注：<text style={{fontSize: 18, fontWeight: "bold"}}>1</text></span>
            <Divider type="vertical"/>
            <span>粉丝：<text style={{fontSize: 18, fontWeight: "bold"}}>9999+</text></span>
            <Button type={"primary"} style={{marginLeft: "35vh"}}>修改资料</Button>
            <Button style={{marginLeft: 20}}>批量导入文章</Button>
          </div>
        </Card>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "60vw", marginTop: 20}}>
          <Row>
            <Col span={15} style={{paddingRight: 10}}>
              <Card>
                <Tabs defaultActiveKey="1" items={items}/>
              </Card>
            </Col>
            <Col span={9}>
              <Card title={"热门话题🔥"} style={{height: "30vh"}} extra={<a>更多</a>}>
              </Card>
            </Col>
          </Row>
        </div>


      </div>

    </>
  );

};
export default UserDetail;

