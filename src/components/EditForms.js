import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

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
            <Container className="edit">
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

    state = {
        show: false
    }

    handleDelete = e => {

        this.setState({show: true})
    }

    dismissAlert = e => {
        this.setState({show: false})
        this.props.delete(this.props.value)
    }

    render() {
        let alert = ''
        if (this.state.show){
           alert = <DeleteAlert dismissAlert = {this.dismissAlert}/>
        }

    return(
        <Row>
             <h2>{this.props.value} <Button onClick={() => this.handleDelete()} variant="danger">Delete Form?</Button>  </h2> 

            {alert}

        </Row>
    )
    }
}

class DeleteAlert extends React.Component {
  
    render() {
      return (
        <Alert variant="danger" onClose={() => this.props.dismissAlert()} dismissible>
          <Alert.Heading>Deleting Form!</Alert.Heading>
          <p>
            This will permanently delete the form, is this what you want? 
          </p>
        </Alert>
      );
    }
}
   