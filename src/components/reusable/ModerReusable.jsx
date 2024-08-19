import React from 'react'
import { Container ,Card,} from 'react-bootstrap'
import img from "../../assets/babylion.jpg"
const ModerReusable = ({title,text,img}) => {
  return (
    <section id="joker">
    <Container>
    <div className="much">
    <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title} </Card.Title>
            <Card.Text>
             {text}
            </Card.Text>
          
          </Card.Body>
        </Card>
    </div>
    
    </Container>
        </section>
  )
}

export default ModerReusable