import React from 'react'
import "./project.css"
import { Col, Container, Row,Button } from 'react-bootstrap'
const Project = () => {
  return (
   <section id="project">
<Container>
<Row>
<Col lg={8}>
<div className="talk">
  <h6>Lets talk</h6>
  <h2>Got a project?</h2>
  <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
</div>
</Col>
<Col lg={2}>

<div className="uti">
        <Button variant="primary" size="lg">
          Contact us
        </Button>{' '}
        
      
      
</div>
</Col>


</Row>

</Container>
   </section>
  )
}

export default Project