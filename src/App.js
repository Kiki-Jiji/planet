import './App.css';
import React from "react";
import { Component } from 'react';
import "easymde/dist/easymde.min.css";
import {HashRouter,Link,Route,Switch} from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

import { MainPage, WriteComm, Config, EditForms} from './components';


class App extends Component {

  
state = {
  forms : {
      venus : [
          {
              blockName: 'test one',
              desc: 'testing letters',
              wordLimit: 100,
          },
          {
              blockName: 'test two',
              desc: 'Some text',
              wordLimit: 100,
          }
      ],
      mercury : [
          {
              blockName: 'test two',
              desc: 'Some text',
              wordLimit: 100,
          },
          {
              blockName: 'test two',
              desc: 'Some text',
              wordLimit: 100,
          }
      ]
  }
} 

    handleLoad = e => {
        (async () => {
            const data = await window.config.content;

            Object.keys(data).map( elem => {

              let keyName = elem 
              let df = data[elem]

              this.setState({
                [keyName]: df
              })
            }
           
            )
              })();
    }

    handleDeletingForm = form => {
      // e.preventDefault()
      console.log(form)
      let currentState = {...this.state.forms}
      delete currentState[form]
      this.setState({forms: currentState})
  }

  render() {
    return (
      <div className="App">
          <p>
            Planet <Badge bg="secondary">New</Badge>
          </p>

          <Button variant="primary" onClick={this.handleLoad}>Load</Button>

          <HashRouter>
            <div>
              <Link to="/"><h2>Home</h2></Link>
              <Link to="/write"><h2>Write</h2></Link>
              <Link to="/config"><h2>Config</h2></Link>
              <Link to="/Edit"><h2>Edit</h2></Link>
            </div>
          <Switch>
            <Route path="/" exact component = {() => <MainPage/>} />
            <Route path="/write" exact component ={() => <WriteComm value={this.state.forms}/>} />
            <Route path="/config" exact component ={() => <Config value={this.state.forms}/>} />
            <Route path="/Edit" exact component = {() => <EditForms value ={this.state.forms} handleDeletingForm ={this.handleDeletingForm}   />} />
          </Switch>
          </HashRouter>
      </div>
    );
};
};

export default App;
