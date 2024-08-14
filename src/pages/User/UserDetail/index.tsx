import 'monaco-editor/min/vs/editor/editor.main.css';
import React, {useState} from "react";
import {useModel, useParams} from "@@/exports";
import {
  Avatar, Button, Card, Col, Divider, Empty, Form, FormProps, Input,
  List, message, Modal, Row, Tabs, TabsProps
} from "antd";
import {
  CreditCardOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  ManOutlined,
  RocketOutlined
} from "@ant-design/icons";
import {updateMyUser} from "@/services/backend/userController";


const UserDetail: React.FC = () => {
// 获取 URL 参数中的 id
  const {id} = useParams<{ id?: string }>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  type UserDetail = {
    userName?: string;
    userAvatar?: string;
    userProfile?: string;
  };

  const onFinish: FormProps<UserDetail>['onFinish'] = (values) => {
    updateMyUser({
      userAvatar: values.userAvatar,
      userProfile: values.userProfile,
      userName: values.userName
    }).then(() => {
      message.success("更新成功");
      setIsModalOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      loginUser.userName = values.userName;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      loginUser.userNamuserProfilee = values.userProfile;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      loginUser.userAvatar = values.userAvatar;
    })
  };

  const onFinishFailed: FormProps<UserDetail>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const {initialState} = useModel('@@initialState');
  const loginUser = initialState?.currentUser as any;

  const data = [
    '诶！你知道吗这个平台可以刷 SQL',
    '天青色等烟雨，而我在等你.',
    '好像还能生成 SQL 以及模拟数据诶🚀.',
    '赶快用起来吧☁️.',
  ];
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '帖子',
      children: <Empty/>,
    },
    {
      key: '2',
      label: '评论',
      children: <Empty/>,
    },
    {
      key: '3',
      label: '笔记',
      children: <Empty/>,
    },
    {
      key: '4',
      label: '问答',
      children: <Empty/>,
    },
    {
      key: '5',
      label: '专栏',
      children: <Empty/>,
    },
    {
      key: '6',
      label: '资料',
      children: <Empty/>,
    },
    {
      key: '7',
      label: '收藏',
      children: <Empty/>,
    },
    {
      key: '8',
      label: '关注',
      children: <Empty/>,
    },
    {
      key: '9',
      label: '粉丝',
      children: <Empty/>,
    },
  ];


  return (
    <>
      <div style={{display: "flex", justifyContent: "center"}}>
        <Card style={{width: "80vw"}}>
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
            <Button type={"primary"} style={{marginLeft: "35vh"}} onClick={showModal}>修改资料</Button>
            <Button style={{marginLeft: 20}}>批量导入文章</Button>
            <Modal footer={null} title="我的信息" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
              <Form
                name="basic"
                labelCol={{span: 6}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{
                  userName: loginUser?.userName,
                  userAvatar: loginUser?.userAvatar,
                  userProfile: loginUser?.userProfile
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<UserDetail>
                  label="用户名"
                  name="userName"
                  rules={[{required: true, message: '请输入你的用户名!'}]}
                >
                  <Input/>
                </Form.Item>

                <Form.Item<UserDetail>
                  label="头像地址"
                  name="userAvatar"
                  rules={[{required: true, message: '请输入你的头像地址!'}]}
                >
                  <Input/>
                </Form.Item>
                <Form.Item<UserDetail>
                  label="我的签名"
                  name="userProfile"
                  rules={[{required: true, message: '请输入你的签名!'}]}
                >
                  <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                  <Button type="primary" htmlType="submit">
                    确定修改
                  </Button>
                </Form.Item>
              </Form>
            </Modal>
          </div>
        </Card>
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: "80vw", marginTop: 20}}>
          <Row>
            <Col span={15} style={{paddingRight: 10}}>
              <Card>
                <Tabs defaultActiveKey="1" items={items}/>
              </Card>
            </Col>
            <Col span={9}>
              <Card title={"热门话题🔥"} extra={<a>更多</a>}>
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={<a href="https://ant.design">🌟{item}</a>}
                      />
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </div>


      </div>

    </>
  );

};
export default UserDetail;

