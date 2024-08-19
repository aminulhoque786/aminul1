import React from 'react'
import "./modern.css"
import { Col, Container, Row } from 'react-bootstrap'
import ModerReusable from '../reusable/ModerReusable'
import img from "../../assets/authan2.jpg"
import img2 from "../../assets/authan.jpg"
import img3 from "../../assets/authan3.jpg"
const Modern = () => {
  return (
   <div className="high">
    <h3>We recomonded a great opportunity</h3>
    <Container>
    <Row>
   <Col lg={4}>
   <ModerReusable title="The modern product manager’s tech stack" img={img} text="Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels."   />
   </Col>
   <Col lg={4}>
   <ModerReusable title="The western product manager’s techniques stack" img={img2} text="Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels."   />
   </Col>
   <Col lg={4}>
   <ModerReusable title="The rural product center tech stack store" img={img3} text="Through strategy, design, and planning we build brand identities that connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and target your audience through the right channels."   />
   </Col>


    </Row>

    </Container>
   </div>
  )
}

export default Modern