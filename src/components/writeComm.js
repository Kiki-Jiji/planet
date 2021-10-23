import React from 'react';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import { render } from '@testing-library/react';

class WriteComm extends React.Component {

    state = {
        formSelected: "",
        form: '',
    };


    handleSelect = e => {
        e.preventDefault()

        this.setState({
            formSelected : e.target.value,
            form: this.props.value[e.target.value]
        })
        
    }


    render() {
        let formElements = '';
        if (this.state.form != '') {
            formElements = <InputForm formInfo = {this.state.form}/>
        } 

        return(
            
            <Container>
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
    
                </Row>
            </Container>
        )
    }

  }

export default WriteComm;


function InputForm(props) {

    return(
        <Container>
            {
                props.formInfo.map((item, index) => (

                    <Row key={index}> 
                    <h2>{ item.blockName }</h2>
                    <p> { item.desc } </p>
                    <SimpleMDE/>
                    </Row>
                ))
            }
            </Container>
    )
    

}