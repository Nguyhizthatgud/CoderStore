import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Checkbox, Form, Input, Flex, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import useAuth from "../hooks/useAuth.jsx";
import { useNavigate, useLocation } from "react-router-dom";
const Loginpage = ({ setIsModalOpen }) => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: ""
    }
  });
  let Auth = useAuth();
  let navigate = useNavigate();
  let location = useLocation();
  const [api, contextHolder] = notification.useNotification();
  const onSubmit = async (data) => {
    console.log(data);
    let from = location.state?.from?.pathname || "/";
    Auth.LoginSuccess(data.username, () => {
      const openNotificationWithIcon = (type) => {
        api[type]({
          message: "Đăng nhập thành công!",
          description: `Xin Chào ${data.username}, Vào lựa giày đi anh ơi!`
        });
      };
      navigate(from, { replace: true });
      openNotificationWithIcon("success");
    });
    setIsModalOpen(false);
  };

  return (
    <Form
      size="large"
      className="max-w-md mx-auto"
      onFinish={handleSubmit(onSubmit)}
      initialValues={{ remember: true }}
      style={{ display: "flex", flexDirection: "column", maxWidth: "400px", margin: "0 auto", paddingTop: "20px" }}
    >
      {contextHolder}
      <Controller
        name="username"
        control={control}
        rules={{
          required: "Nhập tên đeee anh ơi!",
          minLength: { value: 3, message: "Tên phải có ít nhất 3 ký tự!" }
        }}
        render={({ field }) => {
          return (
            <Form.Item
              name="username"
              validateStatus={errors.username ? "error" : ""}
              help={errors.username ? errors.username.message : ""}
            >
              <Input {...field} prefix={<UserOutlined />} placeholder="Nhập tên nè anh ơi." className="rounded-lg" />
            </Form.Item>
          );
        }}
      />

      <Form.Item>
        <Flex justify="space-between" align="center">
          <Controller
            name="remember"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} onChange={(e) => field.onChange(e.target.checked)}>
                Remember me
              </Checkbox>
            )}
          />
          <a href="#forgot">Forgot password</a>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Vào đi anh!
        </Button>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          or <a href="#register">Register now!</a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default Loginpage;
