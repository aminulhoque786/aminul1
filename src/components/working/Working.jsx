import React from 'react'
import "./working.css"
import { Col, Container, Row } from 'react-bootstrap'
import ServiceReusable from "../reusable/WorkingReusable"
import WorkingReusable from '../reusable/WorkingReusable'
const Working = () => {
  return (
   <section id="working">
    <Container>


    <div className="process">
        <h2>Working Process</h2>
        <p>Best Creative digital Agency</p>
    </div>
    <div className="welcome">
        <Row>
        <Col lg={4}>
        <WorkingReusable title="Welcome To Innovate"
        number="1"/>
        </Col>
        <Col lg={4}>
        <WorkingReusable title="Choose Your Services" number="2"/>
        </Col>
        <Col lg={4}>
        <WorkingReusable title="Get Final Results" number="3"/>
        </Col>


        </Row>
    </div>

    </Container>



   </section>
  )
}

export default Working