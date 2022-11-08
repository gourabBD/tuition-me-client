import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const SponsorSlider = () => {
    return (
        
             <Carousel>
      <Carousel.Item>
        <img style={{height:"200px"}}
          className="d-block w-100"
          src="https://cdn.dribbble.com/users/1488337/screenshots/6944906/programming_hero_logo.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"200px"}}
          className="d-block w-100"
          src="https://s.udemycdn.com/meta/default-meta-image-v2.png"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"200px"}}
          className="d-block w-100"
          src="https://images.thedailystar.net/sites/default/files/feature/images/10-min-school.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
        
    );
};

export default SponsorSlider;