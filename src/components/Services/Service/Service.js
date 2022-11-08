import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

const Service = ({service}) => {
    const {_id,subject,img,cost,description,days}=service;
    return (
        <div>
             <CardGroup>
      <Card className='mb-2 p-2'>
        <Card.Img style={{height:'250px'}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{subject}</Card.Title>
          <Card.Text>
            {description.length>150 ? description.slice(0,150) + ' ...read more...' :description}

          </Card.Text>
          <Button variant="primary">Show details</Button>
        </Card.Body>
        
      </Card>
      
      
    </CardGroup>
        </div>
    );
};

export default Service;