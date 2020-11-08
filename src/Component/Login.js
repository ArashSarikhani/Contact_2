import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

class Login extends Component {
    state={
        layout:{
            abelCol: { span: 8 },
            wrapperCol: { span: 16 },
        },
        tailLayout:{
            wrapperCol: { offset: 8, span: 16 },
        },
    }
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    submitHandle=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <>
            <div className='main-form'>
                <Form
                {...this.statelayout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                onSubmit={this.submitHandle}
                >
                    <Form.Item
                    label="username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                    >
                    <Input/>
                    </Form.Item>


                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                     >      

                        <Input.Password/>

                    </Form.Item>

                    <Form.Item {...this.state.tailLayout}
                            name="remember" 
                            valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item {...this.state.tailLayout}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
            </Form>
            </div>

        </>
        );
    }
}

export default Login;