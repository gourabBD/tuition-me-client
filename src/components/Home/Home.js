import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeCourses from '../HomeCourses/HomeCourses';
import Slider from '../Slider/Slider';
import SponsorSlider from '../SponsorSlider/SponsorSlider';
import myimg from '../../me.png'
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const services=useLoaderData()
    return (
        <div>
             
            <Row>
                <Col lg={9} className='d-block '>
                  <div className=' '>
             <h1 className='text-primary'>On Going Services</h1>
             <section className=''>
             <HomeCourses></HomeCourses>
             <div>
                <Link to={'/services'}> <Button>Show all</Button> </Link>
             </div>
            </section>
            <section className='mt-3 p-2'>
            <h2 className='text-primary bg-warning'>Upcoming services</h2>
                <Slider></Slider>
            </section>
            <section className='mt-3 p-2'>
            <h2 className='text-primary bg-warning '>Sponsored by</h2>
                <SponsorSlider></SponsorSlider>
            </section>
            <section className='mt-3 p-2'>
            <Image style={{height:"250px"}} src={myimg}></Image>
            <p>Teacher name: Gourab roy</p>
            <p>BSc. in CSE</p>
                <h3 className='text-primary bg-warning '>Goal of the services</h3>
                <p>The Goal of the the services are to make the students confident about their upcoming challenges.</p>
                <p> Spread the knowledge  to the students and teach them how to learn effectively and with practical explaination. </p>
                <p>Getting involve the modern technology in teaching process and make learning much more fun and efficient.</p>
            </section>
                  </div>
                </Col>
                <Col className='bg-light ' lg={3}>
                <h3 className='text-primary'>All Services</h3>
                  <div className='d-grid'>
                 
                  {
                    services.map(service=><Link key={service._id} className='fw-bold text-decoration-none p-2' to={`/services/${service?._id}`}>{service.subject}</Link>)
                   }
                  </div>
                </Col>
               

            </Row>
          
        
        </div>
    );
};

export default Home;