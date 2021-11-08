import React from 'react';
import { Fragment, Component } from "react"

class Config extends Component {
        
  state = {
    questions: [{
        blockName: 'Block Name',
        desc: 'A descrption of the block goes here',
        wordLimit: 100,
    }],
    formName : "Example Form Name"
  }

  handleText = i => e => {
    let questions = [...this.state.questions]
    questions[i].blockName = e.target.value
    this.setState({
      questions
    })
  }

  handleDesc = i => e => {
    let questions = [...this.state.questions] 
    questions[i].desc = e.target.value
    this.setState({
        questions
    })
  }

  handleNum = i => e => {
    let questions = [...this.state.questions] 
    questions[i].wordLimit = e.target.value
    this.setState({
        questions
    })
  }

  handleDelete = i => e => {
    e.preventDefault()
    let questions = [
      ...this.state.questions.slice(0, i),
      ...this.state.questions.slice(i + 1)
    ]
    this.setState({
      questions
    })
  }

  addQuestion = e => {
    e.preventDefault()
    let questions = this.state.questions.concat([{blockName: '', desc:'', wordLimit: 0}])
    this.setState({
      questions
    })
  }

  handleFormName = e => {
    this.setState({formName: e.target.value})
    console.log(this.state.formName)
  }
  

  render() {
    return (
    <div className="container config">
        <div class="input-group mb-3">
          <input type="text" class="form-control" value={this.state.formName} onChange={this.handleFormName} />
        </div>

        {this.state.questions.map((question, index) => (
        <div class="row">
        <h2>{question.blockName} </h2>
          <span key={index}>

          <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Name of Block</label>
                <input type="text" class="form-control"  value={question.blockName} onChange={this.handleText(index)} />
            </div>

            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Description</label>
                <input type="text" class="form-control"  value={question.desc} onChange={this.handleDesc(index)} />
            </div>

            <input type="number" step="10" min="10" max="500" onChange={this.handleNum(index)}/>

            <button class="btn btn-danger" onClick={this.handleDelete(index)}>Delete Block</button>
          </span>
          </div>
        ))}
        <br/>
        <div className="row">
        <div class="col-auto">
          <button class="btn btn-primary" onClick={this.addQuestion}>Add New Block</button>
        </div>
        <div class="col-auto">
          <button class="btn btn-primary" onClick={() => this.props.addForm(this.state)}>Save Form</button>
        </div>
        </div>
    </div>
    )
  }
}

export default Config;