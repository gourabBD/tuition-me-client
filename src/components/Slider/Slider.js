import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img style={{height:"200px"}}
          className="d-block w-100"
          src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"200px"}}
          className="d-block w-100"
          src="https://nextbigtechnology.com/wp-content/uploads/2018/01/HTML5-App-Development.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"200px"}}
          className="d-block w-100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    );
};

export default Slider;