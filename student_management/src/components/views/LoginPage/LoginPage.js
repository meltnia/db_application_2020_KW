import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import './LoginPage.css';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 5,
    span: 8,
  },
};

const onFinish = (values) => {
  const datas = {id:values.username,
                password:values.password}
  axios('/api/sendLogin',{ 
  method: 'POST', headers: new Headers(), data: datas})
  .then(res =>{
        if(res.data.success){
        alert('로그인에 성공했습니다!');
        sessionStorage.setItem('login', true);
        return window.location.href='/';
        }
        else
          alert('계정을 확인해 주세요');
  })
  .catch(err=>{
    console.log(err);
  });          
};


const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


  class Login extends Component {
    
    render() {
      return (
        <div className="main">
          <h3> 로그인 </h3>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="ID(학번)"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>
    
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
    
          <Form.Item {...tailLayout} wrapperCol={{...tailLayout.wrapperCol, offset:11}}>
            <Button type="primary" htmlType="submit">
              로그인
            </Button>
          </Form.Item>
        </Form>
        </div>

      );
    }
  };
  
  export default Login;