import React,{useContext,} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const ReviewForm = () => {
    const {user}=useContext(AuthContext)
   const service=useLoaderData()

    const handlePostReview=(event)=>{
     event.preventDefault()
     const form=event.target;
     const userReview=form.userReview.value;
     
     const order = {
      
        email:user.email,
        name: user.displayName,
        userReview:userReview,
        photoURL:user.photoURL,
        serviceId:service._id,
        subject:service.subject

      }

      fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Review Placed Successfully!");
          form.reset();
        }
      })
      .catch((err) => console.error(err));

    }
    
    return (
        <div className='d-flex justify-content-center mb-5 '>
             <Form onSubmit={handlePostReview} className='w-50'>
      <Form.Group className="mb-3 d-grid" >
        <Form.Label>Your Review</Form.Label>
        <textarea name='userReview' type="text" placeholder="Write your review" />
       
      </Form.Group>

      
     
      <Button onSubmit={handlePostReview} variant="primary" type="submit">
        Submit
      </Button>
      </Form>
        </div>
    );
};

export default ReviewForm;