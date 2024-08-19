import React from 'react'
import { Card,Button,Image} from 'react-bootstrap'
import icon from "../../assets/icon1.png"


const WorkingReusable = (props) => {
  return (
    <div className="bio">

    
         <Card style={{ width: '18rem' }}>
         <div className="gol">
         <h3>{props.number}</h3>
        
        {/* Second Image */}
         </div>
       <div className="kui">
       <img src={icon} alt="Second Icon" />
       </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default WorkingReusable