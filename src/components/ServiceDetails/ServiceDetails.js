import React,{useEffect,useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ServiceDetails = () => {
    const detail=useLoaderData()
 const {img,subject,_id,cost,description,days}=detail
    const [reviews,setReviews]=useState()
   useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res=>res.json())
    .then(data=>setReviews(data))
   },[])
    console.log(reviews)
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
                    <h1>Total reviews of subject: {subject}: {reviews?.length}</h1>
                </Col>
               

            </Row>
          
        </Container>
        </div>
    );
};

export default ServiceDetails;