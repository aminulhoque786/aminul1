import React from 'react'
import "./hundred.css"
import { Container, Row ,Col,Button} from 'react-bootstrap'
const Hundrerd = () => {
  return (
    <section id="hundred">
<Container>
    <Row>
    <Col lg={7}>
   <Row>
<Col lg={3}>
<div className="gui">
    <h2>19+</h2>
    <p>Total top service</p>
   </div>
</Col>
<Col lg={3}>
<div className="gui">
    <h2>27+</h2>
    <p>Total top service</p>
   </div>
</Col>
   </Row>
   <div className="hug">

   <Row>
<Col lg={3}>
<div className="gui">
    <h2>98%</h2>
    <p>Total top service</p>
   </div>
</Col>
<Col lg={3}>
<div className="gui">
    <h2>1,458</h2>
    <p>Usual users</p>
   </div>
</Col>
   </Row>
   </div>

    </Col>
    <Col lg={5}>
    <div className="jui">
        <h2>The hundred of completed works still counting</h2>
        <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
    </div>

    <div className="tom">
        <Button variant="primary" size="lg">
        More about us
        </Button>{' '}
        
      </div>
    </Col>

    </Row>
</Container>
    </section>
  )
}

export default Hundrerd