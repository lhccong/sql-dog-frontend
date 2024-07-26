import Footer from '@/components/Footer';
import {SYSTEM_LOGO} from '@/constants';
import {captcha, userRegister} from '@/services/backend/userController';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {LoginForm, ProFormText} from '@ant-design/pro-form';
import {Col, Form, Image, message, Row, Tabs} from 'antd';
import React, {useEffect, useRef, useState} from 'react';
import {history} from 'umi';
import styles from './index.less';


const Register: React.FC = () => {

  const [type, setType] = useState<string>('account');
  const [form] = Form.useForm();
  // @ts-ignore
  const [captchaResult, setCaptchaResult] = useState<API.CaptchaVO>();
  const ref = useRef();
  useEffect(() => {
    captcha().then((res) => {
      setCaptchaResult(res.data)
      form.setFieldsValue({varKey: res.data?.key})
    });
  }, []); // 空依赖数组表示只在组件挂载时运行一次

  // 表单提交
  const handleSubmit = async (values: API.UserRegisterRequest) => {
    const {userPassword, checkPassword} = values;
    // 校验
    if (userPassword !== checkPassword) {
      message.error('两次输入的密码不一致');
      return;
    }

    try {
      // 注册
      const data = await userRegister(values);
      if (data.code === 0) {
        const defaultLoginSuccessMessage = '注册成功！';
        message.success(defaultLoginSuccessMessage);

        history.push({
          pathname: '/user/login',
        });
      }
    } catch (error: any) {
      const defaultLoginFailureMessage = '注册失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <LoginForm
          form={form}
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title="SQL Dog"
          initialValues={{
            varKey: captchaResult?.key,
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane key="account" tab={'账号密码注册'}/>
          </Tabs>
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="请输入账号"
                rules={[
                  {
                    required: true,
                    message: '账号是必填项！',
                  },
                ]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="请输入密码"
                rules={[
                  {
                    required: true,
                    message: '密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于 8',
                  },
                ]}
              />
              <ProFormText.Password
                name="checkPassword"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon}/>,
                }}
                placeholder="请再次输入密码"
                rules={[
                  {
                    required: true,
                    message: '确认密码是必填项！',
                  },
                  {
                    min: 8,
                    type: 'string',
                    message: '长度不能小于 8',
                  },
                ]}
              />
              {/*<Captcha*/}
              {/*  onSuccess={async (data) => {*/}
              {/*    const value = valueData;*/}
              {/*    if (value) {*/}
              {/*      value.captchaVerification = data.captchaVerification;*/}
              {/*      await handleSubmit(value);*/}
              {/*    }*/}
              {/*  }}*/}
              {/*  path="http://localhost:8204/api"*/}
              {/*  type="auto"*/}
              {/*  ref={ref}*/}
              {/*></Captcha>*/}
              <ProFormText name="verKey" hidden={true}/>
              <Row>
                <Col span={10}><ProFormText name="verCode"></ProFormText></Col>
                <Col span={12} style={{marginLeft: 20, marginBottom: 10}}><Image src={captchaResult?.code} id="verImg"
                                                                                 width="130px" height="48px"/></Col>
              </Row>

            </>
          )}
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
