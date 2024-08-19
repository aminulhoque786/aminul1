import React from 'react'
import { Button,Card } from 'react-bootstrap'

const ServiceReusable = ({title,text,img}) => {
  return (
   <div className="juker">
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={img} />
    
      <Card.Body>
        <Card.Title>{title}   </Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
       
      </Card.Body>
    </Card>
  


   </div>
 
  )
}

export default ServiceReusable