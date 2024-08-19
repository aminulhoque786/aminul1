import React from 'react'
import "./experience.css"
import { Col,Container,Row,Button } from 'react-bootstrap'
import lion from "../../assets/lion.jpg"
import kosto from "../../assets/kosto.png"
import haat from "../../assets/haat.png"
const Experience = () => {
  return (
   <section id="experience">
 <Container>
 <Row>
<Col lg={6}>
<div className="hook">
<h2>25 Years Of Experience We Provide Solutions</h2>
</div>
<div className="null">
<div className="hit">
<Row>
<Col lg={2}>
<div className="jik">
<img src={kosto} alt="" />

</div>
</Col>
<Col lg={10}>
<div className="juk">
<h3>Professional Agency</h3>
<p>If you'd like to know how we can tap into your brand's potential, contact us to learn more about our services.</p>
</div>
</Col>

</Row>
</div>
</div>
<div className="mui">
<div className="jay">
<Row>
<Col lg={2}>
<div className="sick">
    <img src={haat}alt="" />
</div>
</Col>
<Col lg={10}>
<div className="juk">
<h3>Best Solutions Provider</h3>
<p>We know more about digital direct response than virtually any digital marketing agency in the industry.</p>
</div>



</Col>

</Row>
</div>
</div>

</Col>

<Col lg={6}>
<div className="luk">
    <img src={lion}alt="" />
</div>
</Col>


   </Row>
   <div className="seru">
        <Button variant="primary" size="lg">
        More about us
        </Button>{' '}
        
      </div>
 </Container>

   </section>
  )
}

export default Experience