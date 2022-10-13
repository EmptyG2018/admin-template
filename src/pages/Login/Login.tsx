import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { FormattedMessage } from "react-intl";
import React from "react";
import styled from "styled-components";

const LoginTopSC = styled.div`
  margin: 0 auto;
`;

const LoginHeaderSC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  line-height: 44px;
`;

const LogoSC = styled.img`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  vertical-align: top;
`;

const TitleSC = styled.span`
  position: relative;
  top: 2px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 33px;
`;

const LoginDescSC = styled.p`
  margin-top: 12px;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
  text-align: center;
`;

const LoginTop: React.FC = () => {
  return (
    <LoginTopSC>
      <LoginHeaderSC>
        <LogoSC src={require("../../assets/logo.svg")} />
        <TitleSC>Ant Design</TitleSC>
      </LoginHeaderSC>
      <LoginDescSC>Ant Design 是西湖区最具影响力的 Web 设计规范</LoginDescSC>
    </LoginTopSC>
  );
};

type LoginFormProps = {
  onFinish?: (values: any) => void;
};

const LoginFormSC = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;

const ForgotLinkSC = styled.a`
  float: right;
`;

const LoginForm: React.FC<LoginFormProps> = ({ onFinish }) => {
  return (
    <LoginFormSC>
      <Form
        name="login"
        initialValues={{ username: "", password: "", remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入账号!" }]}
        >
          <Input prefix={<LockOutlined />} placeholder="账号" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input
            type="password"
            prefix={<LockOutlined />}
            placeholder="密码"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <ForgotLinkSC>忘记密码？</ForgotLinkSC>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            <FormattedMessage id="sign" defaultMessage="登录" />
          </Button>
        </Form.Item>
      </Form>
    </LoginFormSC>
  );
};

const LayoutPageSC = styled.div`
  height: 100vh;
  background-color: #f0f2f5;
`;

const LayoutHeaderSC = styled.div`
  height: 40px;
`;

const LayoutContainerSC = styled.div`
  padding: 64px 0 48px 0;
`;

const LayoutFooterSC = styled.div`
  height: 124px;
`;

const Login: React.FC = () => {
  const handleFinish = (formData: any) => {
    console.log("geawgewg", formData);
  };

  return (
    <LayoutPageSC>
      <LayoutHeaderSC />
      <LayoutContainerSC>
        <LoginTop />
        <LoginForm onFinish={handleFinish} />
      </LayoutContainerSC>
      <LayoutFooterSC />
    </LayoutPageSC>
  );
};

export default Login;
