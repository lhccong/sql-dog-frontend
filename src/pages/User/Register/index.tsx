import Footer from '@/components/Footer';
import {SYSTEM_LOGO} from '@/constants';
import {userRegisterUsingPost} from '@/services/backend/userController';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {LoginForm, ProFormText} from '@ant-design/pro-form';
import {message, Tabs} from 'antd';
import React, {useRef, useState} from 'react';
import {history} from 'umi';
import styles from './index.less';


const Register: React.FC = () => {
  const script = document.createElement('script');
  script.src = './load.min.js';
  const [type, setType] = useState<string>('account');
  // @ts-ignore
  const [valueData, setValueData] = useState<API.UserRegisterRequest>(null);

  const ref = useRef();
  let style = {};
  const config = {
    // 生成接口 (必选项,必须配置, 要符合tianai-captcha默认验证码生成接口规范)
    requestCaptchaDataUrl: "http://localhost:8108/api/user/gen",
    // 验证接口 (必选项,必须配置, 要符合tianai-captcha默认验证码校验接口规范)
    validCaptchaUrl: "http://localhost:8108/api/user/check",
    // 验证码绑定的div块 (必选项,必须配置)
    bindEl: "#captcha-box",
    // 验证成功回调函数(必选项,必须配置)
    validSuccess: (res: any, c: any, tac: { destroyWindow: () => void; }) => {
      // 销毁验证码服务
      tac.destroyWindow();
      console.log("验证成功，后端返回的数据为", res);
      // 调用具体的login方法
      // login(res.data.token)
    },
    // 验证失败的回调函数(可忽略，如果不自定义 validFail 方法时，会使用默认的)
    validFail: (res: any, c: any, tac: { reloadCaptcha: () => void; }) => {
      console.log("验证码验证失败回调...")
      // 验证失败后重新拉取验证码
      tac.reloadCaptcha();
    },
    // 刷新按钮回调事件
    btnRefreshFun: (el: any, tac: { reloadCaptcha: () => void; }) => {
      console.log("刷新按钮触发事件...")
      tac.reloadCaptcha();
    },
    // 关闭按钮回调事件
    btnCloseFun: (_el: any, tac: { destroyWindow: () => void; }) => {
      console.log("关闭按钮触发事件...")
      tac.destroyWindow();
    }
  }
  const windows: any = window
  windows.initTAC("./tac", config, style).then((tac: { init: () => void; }) => {
    tac.init(); // 调用init则显示验证码
  }).catch((e: any) => {
    console.log("初始化tac失败", e);
  })
  const click = () => {
    const check: any = ref.current;
    check.verify();
    console.log(check.verify());
  };
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
      const data = await userRegisterUsingPost(values);
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
          submitter={{
            searchConfig: {
              submitText: '注册',
            },
          }}
          logo={<img alt="logo" src={SYSTEM_LOGO}/>}
          title="SQL Dog"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            click();
            setValueData(values);
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
              <div id="captcha-box"></div>
            </>
          )}
        </LoginForm>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
