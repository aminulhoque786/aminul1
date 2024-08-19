import React from 'react'
import "./what.css"
import { Container,Row,Col,Card } from 'react-bootstrap'
import icon from "../../assets/icon1.png"
import icon1 from "../../assets/icon2.png"
import icon2 from "../../assets/icon3.png"
const What = () => {
  return (
    <section id="what">
   <Container>
<div className="help">
    <h2>What We Do?</h2>
</div>
<Row>
<Col lg={4}>
<div className="dich">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={icon} />
      <Card.Body>
        <Card.Title>Enterprise software </Card.Title>
        <Card.Text>
        By applying behavioral science to customer experience, we design engaging digital products used by millions of people.
        </Card.Text>
       
      </Card.Body>
    </Card>
</div>
</Col>
<Col lg={4}>
<div className="dich">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={icon1} />
      <Card.Body>
        <Card.Title>Enterprise software </Card.Title>
        <Card.Text>
        By applying behavioral science to customer experience, we design engaging digital products used by millions of people.
        </Card.Text>
       
      </Card.Body>
    </Card>
</div>
</Col>
<Col lg={4}>
<div className="dich">
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={icon2} />
      <Card.Body>
        <Card.Title>Enterprise software </Card.Title>
        <Card.Text>
        By applying behavioral science to customer experience, we design engaging digital products used by millions of people.
        </Card.Text>
       
      </Card.Body>
    </Card>
</div>
</Col>







</Row>


   </Container>
    </section>
  )
}

export default What