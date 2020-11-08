import React, { Component } from 'react';
import { Button,Input,Form } from 'antd';
import { UserOutlined} from '@ant-design/icons';


class Contact extends Component {
    state={
        name:'',
        phone:'',
    }
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    submitHandler=(e)=>{
        e.preventDefault();
        this.props.getContact({
            name:this.state.name,
            phone:this.state.phone
        })
        this.setState({
            name:'',
            phone:'',
        })
        
    }
    getName=(e)=>{
        let valueName=e.target.value
        this.setState({
            name: valueName
        })
    }
    getPhone=(e)=>{
        let valuePhone=e.target.value
        this.setState({
            phone: valuePhone
        })
    
    }

    render() {

        return (
            <>
                        <form action=""  onSubmit={this.submitHandler}>
                        <Input value={this.state.name} onChange={this.getName} placeholder="Name" prefix={<UserOutlined />} />
                        <Input value={this.state.phone} onChange={this.getPhone} placeholder="Name" type='number' />
                        <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                        </Form.Item>
                        </form> 
            </>
        );
    }
}

export default Contact;