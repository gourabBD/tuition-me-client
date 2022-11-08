import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomeCourses from '../HomeCourses/HomeCourses';
import Slider from '../Slider/Slider';
import SponsorSlider from '../SponsorSlider/SponsorSlider';

const Home = () => {
    const services=useLoaderData()
    return (
        <div>
             
            <Row>
                <Col lg={9} className='d-flex '>
                  <div className=' '>
             <h1 className='text-primary'>On Going Services</h1>
             <section className=''>
             <HomeCourses></HomeCourses>
            </section>
            <section className='mt-3 p-2'>
            <h2 className='text-primary bg-warning'>Upcoming services</h2>
                <Slider></Slider>
            </section>
            <section className='mt-3 p-2'>
            <h2 className='text-primary bg-warning '>Sponsored by</h2>
                <SponsorSlider></SponsorSlider>
            </section>
                  </div>
                </Col>
                <Col className='bg-light ' lg={3}>
                <h3 className='text-primary'>All Services</h3>
                  <div className='d-grid'>
                 
                  {
                    services.map(service=><Link className='fw-bold text-decoration-none p-2' to={`/services/${service?._id}`}>{service.subject}</Link>)
                   }
                  </div>
                </Col>
               

            </Row>
          
        
        </div>
    );
};

export default Home;