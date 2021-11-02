import React from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class MainPage extends React.Component {
  
    render() {
      return(
        <div>

        <div className="overlay">
          <div className="intro">
            <div className = "container">
              <div className="row">
                <h1>Commentary</h1>
                <p>Easily write commentary in live markdown</p>
              </div>
            </div>
          </div>
        </div>

        <Container className="features">
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
          </Row>
        </Container>

        </div>
      );
    }
  
  }
  
export default MainPage;