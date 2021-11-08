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

  // componentDidMount() {
  //   this.handleLoad()
  // }
  
state = {
  forms : {
      venus : [
          {
              blockName: 'Planet Count',
              desc: 'The number of planets',
              wordLimit: 100,
          },
          {
              blockName: 'Breakdown of planets by type',
              desc: 'which are big and which are less big',
              wordLimit: 100,
          }
      ],
      mercury : [
          {
              blockName: 'Headline GDP',
              desc: 'This is how GDP does that thingy',
              wordLimit: 100,
          },
          {
              blockName: 'Breakdown of GDP by dog breed',
              desc: 'Each dog has its own GDP cause thats how GDP works',
              wordLimit: 100,
          }
      ]
  }
} 

  // handleLoad = e => {
  //       (async () => {
  //           const data = await window.config.content;
  //           console.log(data)

  //           this.setState({forms: data})

  //             })();
  //   }

    handleDeletingForm = form => {
      let currentState = {...this.state.forms}
      delete currentState[form]
      this.setState({forms: currentState})
      
      // window.config.saveApp(currentState);
  }

  addForm = form => {
    let currentState = {...this.state.forms}
    currentState[form.formName] = form.questions
    this.setState({forms: currentState})

    // window.config.saveApp(currentState);

  }

  saveCommentary = form => {
    // window.config.save_state(form);
  }

  render() {
    return (
      <div className="App">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
          <p>
            Planet <Badge bg="secondary">New</Badge>
          </p>

          <HashRouter>
            <div>
              <Link to="/"><h2>Home</h2></Link>
              <Link to="/write"><h2>Write</h2></Link>
              <Link to="/config"><h2>Config</h2></Link>
              <Link to="/Edit"><h2>Edit</h2></Link>
            </div>
          <Switch>
            <Route path="/" exact component = {() => <MainPage/>} />
            <Route path="/write" exact component ={() => <WriteComm value={this.state.forms} saveCommentary={this.saveCommentary} />} />
            <Route path="/config" exact component ={() => <Config value={this.state.forms} addForm={this.addForm}/>} />
            <Route path="/Edit" exact component = {() => <EditForms value ={this.state.forms} handleDeletingForm ={this.handleDeletingForm}   />} />
          </Switch>
          </HashRouter>
      </div>
    );
};
};

export default App;
