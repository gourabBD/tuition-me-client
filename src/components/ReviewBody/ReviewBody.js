import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import './reviewbody.css'

const ReviewBody = ({review}) => {
    const {_id,email,name,userReview,photoURL,serviceId,subject}=review
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
         <div>
         <Card.Img  className="userImage" src='photoURL'/>
         <Card.Title>{name}</Card.Title>
         </div>
          <Card.Subtitle className="mb-2 text-muted">Service Id: {serviceId}</Card.Subtitle>
          <Card.Text>
          <span className='fw-bold'>Review:</span> {userReview}
          </Card.Text>
          <p></p>
          
        </Card.Body>
      </Card>
    );
};

export default ReviewBody;