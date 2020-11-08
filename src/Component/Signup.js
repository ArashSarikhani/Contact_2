import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';

class Signup extends Component {
    state={
        layout:{
            abelCol: { span: 8 },
            wrapperCol: { span: 16 },
        },
        tailLayout:{
            wrapperCol: { offset: 8, span: 16 },
        },
        name: '',
        email: '',
        password: ''
    }
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    nameHandle=(e)=>{
        let nameValue = e.target.value
        this.setState({
            name: nameValue
        })
    };
    emailHandle=(e)=>{
        let emailValue=e.target.value
        this.setState({
            email: emailValue
        })
    }
    passwordHandle=(e)=>{
        let passwordValue=e.target.value
        this.setState({
            password: passwordValue
        })
    }
    submitHandle=(e)=>{
        e.preventDefault();
        axios.post('/user',{
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        // headers: {
        //     Authorization: 'Bearer ' + Token
        // }
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
                            label="name"
                            name="name"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                            ]}
                            >
                            <Input value={this.state.name} onChange={this.nameHandle}/>
                            </Form.Item>

                            <Form.Item
                            label="Email"
                            name="Email"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                            },
                            ]}
                            >
                            <Input value={this.state.email} onChange={this.emailHandle}/>
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

                                <Input.Password value={this.state.password} onChange={this.passwordHandle} />

                            </Form.Item>

                            {/* <Form.Item {...this.state.tailLayout}
                                    name="remember" 
                                    valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                            </Form.Item> */}

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

export default Signup;
