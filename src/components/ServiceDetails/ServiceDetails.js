import React,{useEffect,useState,useContext} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import { useLoaderData,Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import ReviewBody from '../ReviewBody/ReviewBody';

const ServiceDetails = () => {
  const {user}=useContext(AuthContext)
    const detail=useLoaderData()
 const {img,subject,_id,cost,description,days}=detail
    const [reviews,setReviews]=useState()
   useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res=>res.json())
    .then(data=>setReviews(data))
   },[])
    
    return (
        <div>
            <Container>
            <Row>
                <Col lg={7} className='d-block d-lg-flex'>
                  <div className='p-5'>
                  <Card style={{ width: 'auto' }}>
      <Card.Img style={{height:"500px"}} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{subject}</Card.Title>
        <Card.Text>
         <span className='fw-bold'>Details:</span> {description}
        </Card.Text>
        <p>Students of :{detail.class}</p>
        <p>Payment/month:{cost} tk</p>
        <p>Days per week:{days}</p>
        
      </Card.Body>
    </Card>
                  </div>
                </Col>
                <Col lg={5}>
                <div>
                {
                  user? <Link to={`/myreviews/${_id}`}><Button className='mt-2'>Add a review</Button> </Link>:<p className='text-danger fw-bold mt-2'>Please login to add a review.</p>
                }
                </div>
                    <div >
                    <h5>Total reviews: {reviews?.length}</h5>
                    </div>
                    <div className='row row-cols-1 d-flex justify-content-center'>
                      {
                        reviews?.map(review=><ReviewBody key={review?._id} review={review}></ReviewBody> )
                      }
                    </div>
                </Col>
               

            </Row>
          
        </Container>
        </div>
    );
};

export default ServiceDetails;