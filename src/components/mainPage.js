import React from 'react';
import '../index.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AntDesign from './animation';
import Solar from './solar';

class MainPage extends React.Component {
  
    render() {
      return(
     

            <Container className="page" fluid>

        <Solar/>

           <section className="dark">
      <h1>Planets</h1>
      <p>Commentary made easy</p>
    </section>

              <section className="red">
      <h1>Markdown</h1>
      <p>Write your commentary in markdown with a live editor</p>

      <div class="wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
    
    <div class="spacer layer1"></div>

    <section className="purple">
      <h1>Save Commentary</h1>
      <p>Commentary is saved as an easy to read json for intergration into downstream tools</p>
    </section>

       
    </Container>
      );
    }
  
  }
  
export default MainPage;