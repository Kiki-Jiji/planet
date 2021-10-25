import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

class EditForms extends React.Component {

    state = {
        formToDelete:''
    }

    handleSelectFormDelete = e => {
        e.preventDefault()

        this.setState({
            formToDelete : e.target.value,
        })
        
    }


    render() {
        let deleteOption = ''
        if(this.state.formToDelete != ''){
            deleteOption = <DeleteForm  
            value={this.state.formToDelete}
            delete={this.props.handleDeletingForm}    
            />
        }

        return(
            <Container>
                <Row>
                    <h1>Edit Forms</h1>
                    <h2> Delete an entire Form?</h2>
                    <Form.Select aria-label="Default select example" onChange={this.handleSelectFormDelete}>
                        <option>Open this select menu</option>
                        {
                            Object.keys(this.props.value).map(element => (
                                <option value={element}>{element} </option>
                            ))    
                        } 
                </Form.Select>

                {deleteOption}

                </Row>
            </Container>
        )
    }

};

export default EditForms;

class DeleteForm extends React.Component { 

    render() {
    return(
        <Row>
             <h2>{this.props.value} <Button onClick={() => this.props.delete(this.props.value)} variant="danger">Delete Form?</Button>  </h2> 
        </Row>
    )
    }
}