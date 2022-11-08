import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { toast } from 'react-hot-toast';
import { useState, useEffect } from 'react';

const MyReviewCard = ({review}) => {
 
 

    const handleDeleteReview=(id)=>{
        const proceed = window.confirm(
            "Are you sure, you want to cancel this order?"
          );

          if (proceed) {
           
                fetch(`http://localhost:5000/review/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                
                if (data.deletedCount > 0) {
                  toast.success("Deleted successfully!");
                  review?.filter((odr) => odr._id !== id);
                  
                  
                }
                
              });
            
          }

    }
    return (
        <CardGroup>
        <Card  className='p-2 m-2' style={{ width: '18rem' }}>
      <Card.Img style={{height: '150px'}} variant="top" src={review?.photoURL} />
      <Card.Body>
        <Card.Title>{review?.name}</Card.Title>
        <p>Service Id: {review?.serviceId}</p>
        <p>Subject: {review?.subject}</p>
        <Card.Text>
          <span className='fw-bold'>Review:</span> {review?.userReview}
        </Card.Text>
        <Button className='me-3 mt-2' onClick={()=>handleDeleteReview(review?._id)} variant="primary">Delete Review</Button>
        <Button className='mt-2' variant="primary">Edit Review</Button>
      </Card.Body>
    </Card>
    </CardGroup>
        
    );
};

export default MyReviewCard;