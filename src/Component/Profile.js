import React, { Component } from 'react';
import Contact from './Contact'
import { Button } from 'antd';
import ListsofContact from './ListofContact'
import '../App.css'


class profile extends Component {
    state={
        show:false,
        contacts:[]
    }
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
    showContact=()=>{
        this.setState({
            show: true
        })
    }
    getData=(data)=>{
        console.log(data)
        this.setState((pre) => {
            return ({
                contacts: [...pre.contacts, data],
                show: false
            })
        })
    }
    deleteContact=(id)=>{
        let contacts = this.state.contacts;
        contacts.splice(id, 1);
        this.setState({
            lists: [...contacts]
        })
    }
    render() {
        return (
            <>
                <div className='main-form'>
                    <Button onClick={this.showContact} type="primary">Create New Contact</Button>
                    {
                        this.state.show &&
                        <Contact getContact={this.getData}/>

                    }
                    
                    
                </div>
                
                <div className='Contact_list'>
                    {
                            this.state.contacts.map((item, index) => {

                                return <ListsofContact
                                    id={index}
                                    key={index}
                                    onDelete={this.deleteContact}
                                    name={item.name}
                                    phone={item.phone} />
                                    
                            })
                            
                    }
                </div>
                
                
            </>
        );
    }
}

export default profile;