import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import './style.css';

class WriteComm extends React.Component {

    state = {
        formSelected: "",
        form: '',
        commentary: {}
    };


    handleSelect = e => {
        e.preventDefault()

        let comms= {}
        this.props.value[e.target.value].map((item, index) => {
            comms[item.blockName] = ''
        })

        this.setState({
            formSelected : e.target.value,
            form: this.props.value[e.target.value],
            commentary: comms
        })
        
    }

    handleChangeComm = i => e => {

        let commentary = this.state.commentary
        commentary[i] = e
        
        this.setState({
            commentary: commentary
        })
    }

    createCommentaryForm = e => {
    
        let form = this.state.commentary
        form['formName'] = this.state.formSelected

        this.setState({
            formSelected: "",
            form: '',
            commentary: {}
        })

        this.props.saveCommentary(form)
    }


    render() {
        let formElements = '';
        if (this.state.form != '') {
            formElements = <InputForm 
            handleChangeComm = {this.handleChangeComm}
            commentary = {this.state.commentary} 
             formInfo = {this.state.form}/>
        } 

        return(
            
            <Container className="write">
            <Row>
                <Form.Select aria-label="Default select example" onChange={this.handleSelect}>
                <option>Open this select menu</option>
                {
                    Object.keys(this.props.value).map(element => (
                        <option value={element}>{element} </option>
                    ))    
                } 
                </Form.Select>
                </Row>
                <Row>
                <h1>{ this.state.formSelected }</h1>
    
                    { formElements }

                    <Button className="end-button" onClick={() => this.createCommentaryForm()}>Save Commentary?</Button>
                </Row>
            </Container>
        )
    }

  }

export default WriteComm;


class InputForm extends React.Component {

    render() {
    return(
        <Container>
            {
                this.props.formInfo.map((item, index) => (

                    <Row key={index}> 
                    <h2>{ item.blockName }</h2>
                    <p> { item.desc } </p>
                    <SimpleMDE value={this.props.commentary[item.blockName]} onChange={this.props.handleChangeComm(item.blockName)}/>
                    </Row>
                ))
            }

            </Container>
    )
        }

}