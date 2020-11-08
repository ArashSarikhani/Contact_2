import React, { Component } from 'react';
import { List, Card } from 'antd';


class listofContact extends Component {
    state={
        data:[
            {
                title: this.props.name
            }
        ]
    }
    deleteHandler=(e)=>{
        e.preventDefault();
        this.props.onDelete(this.props.id);
    }
    render() {  
        return (
                <List
                    dataSource={this.state.data}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                title={item.title} style={{
                                    width: "350px"
                                }}
                                >phone: {this.props.phone}
                                    <span 
                                        onClick={this.deleteHandler}
                                        style={{
                                            cursor: "pointer",
                                            float: "right",
                                            color: '#1890ff',
                                            paddingLeft:'20px'
                                            }}>
                                            delete
                                    </span> 

                                    <span style={{
                                        cursor: "pointer",
                                        float: "right",
                                        color: '#1890ff'
                                        }}>
                                        edit
                                    </span>
                            </Card>
                        </List.Item>
                    
                    )}
                    
                />
            
        )
        
    }
}   

export default listofContact;