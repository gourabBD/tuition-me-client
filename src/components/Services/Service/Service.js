import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Link,
  } from "react-router-dom";
  import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { TypeAnimation } from 'react-type-animation';

const Service = ({service}) => {
    const {_id,subject,img,cost,description,days}=service;
    return (
        <div>
             <CardGroup>
      <Card data-aos="flip-left" style={{height:"30rem"}} className='mb-2 p-2'>
      <PhotoProvider>
        <PhotoView src={img}>
        <Card.Img style={{height:'250px'}} variant="top" src={img} />
        </PhotoView>
      </PhotoProvider>
        
        <Card.Body>
          <Card.Title>{subject}</Card.Title>
          <Card.Text>
            {description.length>100 ? description.slice(0,100) + ' ...' :description}

          </Card.Text>
         
        </Card.Body>
        <Link  to={`/services/${service?._id}`}><Button  variant="primary">Show details</Button></Link>
      </Card>
      
      
    </CardGroup>
        </div>
    );
};

export default Service;