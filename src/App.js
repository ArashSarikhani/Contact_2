import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Drawer, Button } from 'antd';
import "./App.css"
import Login from "./Component/Login.js"
import Signup from './Component/Signup.js'
import Profile from './Component/Profile.js'


class App extends Component {
  state={
    visible:false
  }
  showDrawer = () => {
    this.setState({
      visible: true
    });
  };
  onClose = () => {
    this.setState({
      visible: false
    })
  };
  render() {
    return (
      <>
        <Router>
        <div className="main">
          <Button type="primary" onClick={this.showDrawer}>
            let's start
          </Button>
        </div>
        {/* <div
          style={{
            width:'100%',
            height:'100%',
            display:'flex',
            alignItems: 'center',
            justifyContent: "center",
            

          }}
        > 

          <h1
            style={{
              color: '#1890ff'
            }}
          >Welcome <br/>Please Click Start Button!</h1>
        </div> */}
        
        
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <ul>
            <li>
              <Link onClick={this.onClose} to="/">Home</Link>
            </li>
            <li>
              <Link onClick={this.onClose} to="/Login">Login</Link>
            </li>
            <li>
              <Link onClick={this.onClose} to="/Signup">Signup</Link>
            </li>
            <li>
              <Link onClick={this.onClose} to="/Profile">Profile</Link>
            </li>
          </ul>
        </Drawer>

        <Switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Signup">
            <Signup/>
          </Route>
          <Route path="/Profile">
            <Profile/>
          </Route>
        </Switch>
        
        </Router>
      </>
    );
  }
}

export default App;

