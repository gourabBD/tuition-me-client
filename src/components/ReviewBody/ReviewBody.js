import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import './reviewbody.css'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { TypeAnimation } from 'react-type-animation';

const ReviewBody = ({review}) => {
    const {_id,email,name,userReview,photoURL,serviceId,subject}=review
    return (
        <Card data-aos="fade-right" style={{ width: '18rem' }}>
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
          
          <span className='fw-bold'>Review:</span> <TypeAnimation
                  sequence={[` ${userReview}`, 
                  3000, ""]}
                  repeat={Infinity}
                />
          </Card.Text>
          
          
          
        </Card.Body>
      </Card>
    );
};

export default ReviewBody;