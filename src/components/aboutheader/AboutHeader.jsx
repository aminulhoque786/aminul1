import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import "./aboutheader.css"
const AboutHeader = () => {
  return (
    <section id="youth">
   <Container>
<Row>
<Col lg={6}>
<div className="inner">
    <h2>Know more about innovate</h2>
</div>

</Col>
<Col lg={5}>
<div className="might">
  
<p>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand, connect, represent and dominate your market.</p>

</div>
</Col>

</Row>

   </Container>

    </section>
  )
}

export default AboutHeader