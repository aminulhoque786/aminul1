import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap'
import "./we.css"
import lion from "../../assets/lionri.jpeg"
import lion2 from "../../assets/lionti.jpg"
const We = () => {
  return (
    <section id="we">
      <Container>
     <Row>
     <Col lg={7}>
     <div className="kaku">
        <img src={lion} alt="" />
     </div>
     
     
     </Col>
     <Col lg={5}>
     <div className="bui">
        <h2>We conceive and translate our clients dreams into reality.</h2>
           
           <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
     </div>
     </Col>


     </Row>
     <div className="tense">
     <Row>
      <Col lg={5}>
      <div className="bui">
        <h2>A single-minded focus on getting results.</h2>
        <p>Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels.</p>
      </div>
      </Col>
       <Col lg={6}>
       <div className="kaku">
        <img src={lion2} alt="" />
       </div>
       </Col>
     </Row>
     </div>




      </Container>
    </section>
  )
}

export default We