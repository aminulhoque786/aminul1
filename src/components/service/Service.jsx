import React from 'react'
import "./service.css"
import { Row,Col, Container } from 'react-bootstrap'
import ServiceReusable from '../reusable/ServiceReusable'
import Img from "../../assets/lion2.jpg"
import Img1 from "../../assets/liom.jpg"
import Img2 from "../../assets/lion3.jpg"
import Img3 from "../../assets/lion eye.jpg"
import Img4 from "../../assets/lion mouth.jpg"
import Img5 from "../../assets/lion sick.jpg"
const Service = () => {
  return (
    <section id="service">
<Container>
<div className="works">
    <h2>Services We Offer For Agency</h2>
    <p>Best Creative digital Agency</p>
</div>
<div className="google">

<Row>
    <Col lg={4}>
    <ServiceReusable title="Business Planning" text="Data Analysis"
    img={Img}
    />
    </Col>
    <Col lg={4}>
    <ServiceReusable title="Market Research" text="Email Marketing"
    img={Img1}
    />
    </Col>
    <Col lg={4}>
    <ServiceReusable title="Marketing Strategy" text="Optimization"
img={Img2}
      />
    </Col>
    <Col lg={4}>
    <ServiceReusable title="SEO Optimizations" text="Pay-par Click"
img={Img3}
      />
    </Col>
    <Col lg={4}>
    <ServiceReusable title="Content Writting" text="Marketing Strategy"
img={Img4}
      />
    </Col>
    <Col lg={4}>
    <ServiceReusable title="Marketing" text="Market Research"
img={Img5}
      />
    </Col>
  
</Row>

</div>

</Container>
    </section>
  )
}

export default Service