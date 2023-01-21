import React from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
  import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { TypeAnimation } from 'react-type-animation';

const HomeCard = ({service}) => {
    const {description,subject}=service
    return (
        <CardGroup data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom" className=' '>
             <Card data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"  className=' mb-2' >
             <PhotoProvider>
        <PhotoView src={service?.img}>
        <Card.Img style={{height:'200px'}} variant="top" src={service?.img} />
        </PhotoView>
      </PhotoProvider>
      <Card.Body>
        <Card.Title><TypeAnimation
      sequence={[`${subject}`, 3000,""]}
      omitDeletionAnimation
      repeat={Infinity}
    /></Card.Title>
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