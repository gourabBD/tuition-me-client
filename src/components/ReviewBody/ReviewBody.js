import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import './reviewbody.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ReviewBody = ({review}) => {
    const {_id,email,name,userReview,photoURL,serviceId,subject}=review
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
         <div>
         <PhotoProvider>
            <PhotoView src={photoURL}>
            <Image  className="userImage" src={photoURL}/>
            </PhotoView>
         </PhotoProvider>
         <Card.Title>{name}</Card.Title>
         </div>
          <Card.Subtitle className="mb-2 text-muted">Service Id: {serviceId}</Card.Subtitle>
          <p>Subject: {subject}</p>
          <Card.Text>
          
          <span className='fw-bold'>Review:</span> {userReview}
          </Card.Text>
          
          
        </Card.Body>
      </Card>
    );
};

export default ReviewBody;