import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
  import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const HomeCard = ({service}) => {
    const {description,subject}=service
    return (
        <CardGroup>
             <Card className=' mb-2' style={{ width: 'auto' }}>
             <PhotoProvider>
        <PhotoView src={service?.img}>
        <Card.Img style={{height:'250px'}} variant="top" src={service?.img} />
        </PhotoView>
      </PhotoProvider>
      <Card.Body>
        <Card.Title>{subject}</Card.Title>
        <Card.Text>
         
            {
                description.length>150 ? description?.slice(0,150) + ' ...' : description
                }
         
        </Card.Text>
        
      </Card.Body>
    </Card>
    </CardGroup>
    );
};

export default HomeCard;