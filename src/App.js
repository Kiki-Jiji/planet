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

  saveState = e => {

    let data = this.state.forms

    window.config.save_state(data);
  }

    handleLoad = e => {
        (async () => {
            const data = await window.config.content;
            console.log(data)

            this.setState({forms: data})

              })();
    }

    handleDeletingForm = form => {
      let currentState = {...this.state.forms}
      delete currentState[form]
      this.setState({forms: currentState})
  }

  addForm = form => {
    let currentState = {...this.state.forms}
    currentState[form.formName] = form.questions
    this.setState({forms: currentState})
  }

  render() {
    return (
      <div className="App">
          <p>
            Planet <Badge bg="secondary">New</Badge>
          </p>

          <Button variant="primary" onClick={this.handleLoad}>Load</Button>
          <Button variant="primary" onClick={this.saveState}>Save</Button>

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
            <Route path="/config" exact component ={() => <Config value={this.state.forms} addForm={this.addForm}/>} />
            <Route path="/Edit" exact component = {() => <EditForms value ={this.state.forms} handleDeletingForm ={this.handleDeletingForm}   />} />
          </Switch>
          </HashRouter>
      </div>
    );
};
};

export default App;
