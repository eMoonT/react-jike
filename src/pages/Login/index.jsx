import { Card, Form, Input, Button } from "antd";
import logo from "@/assets/logo.png";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../store/modules/user";

const Login = () => {
  const dispatch = useDispatch()
  const onFinish = (value) => {
    dispatch(fetchLogin(value))
    console.log(value)
  };

  return (
    <div className="login flex items-center justify-center h-screen bg-[url('./assets/login.png')] bg-left-top bg-cover">
      <Card className="login-container shadow-xl flex justify-center">
        <img className="login-logo w-[350px] h-[90px]" src={logo} alt="" />
        {/* 登录表单 */}
        <Form onFinish={onFinish} validateTrigger='onBlur'>
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: "请输入手机号",
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "请输入正确的手机号",
              },
            ]}
          >
            <Input size="large" className="w-full" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
