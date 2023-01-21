import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import HomeCourses from "../HomeCourses/HomeCourses";
import Slider from "../Slider/Slider";
import SponsorSlider from "../SponsorSlider/SponsorSlider";
import myimg from "../../me.png";
import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../ReviewBody/reviewbody.css";
import NavBar from "../NavBar/NavBar";
import Footers from "../Footer/Footers";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const services = useLoaderData();
  return (
    <div className="w-100 bg-white ">
      <Row className=" ">
        <Col lg={10} className="d-block p-0 overflow-hidden">
          <div className="w-100 ">
            <h1 className="text-primary">On Going Services</h1>
            <section className="ps-3 pe-lg-2 pe-3">
              <HomeCourses></HomeCourses>
              <div>
                <Link to={"/services"}>
                  {" "}
                  <Button>Show all</Button>{" "}
                </Link>
              </div>
            </section>
           
            {/* <section className="mt-3 ">
              <h2 className="text-primary bg-warning ">Sponsored by</h2>
              <SponsorSlider></SponsorSlider>
            </section> */}
            <section className="mt-3 p-2">
              <Image
                className="w-auto"
                style={{ height: "200px" }}
                src={myimg}
              ></Image>
              <TypeAnimation
                sequence={[
                  "Teacher name: Gourab roy", // Types 'One'
                  1000, // Waits 1s
                  "BSc. in CSE", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  
                  "The Goal of the the services are to make the students confident about their upcoming challenges.", // Types 'Three' without deleting 'Two'
                  2000,
                  "Spread the knowledge  to the students and teach them how to learn effectively and with practical explaination.", // Types 'Three' without deleting 'Two'
                  2000,
                  "Getting involve the modern technology in teaching process and make learning much more fun and efficient.", // Types 'Three' without deleting 'Two'
                  2000,
                ]}
                className="text-primary fw-bold"
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </section>
            <section className="mt-3 w-100">
              <h2 className="text-primary bg-warning">Upcoming services</h2>
              <Slider></Slider>
            </section>
          </div>
          
        </Col>
        <Col className="  position-relative bg-warning  overflow-visible" lg={2}>
          <div style={{ height: "495px" }} className="position-sticky  bg-warning p-1    top-0   ">
            
            <div  className="d-grid text-start ">
            <h3 className="text-primary  ">All Services</h3>
              {services.map((service) => (
                <Link
                  key={service._id}
                  className="fw-bold text-decoration-none p-2"
                  to={`/services/${service?._id}`}
                >
                  {service.subject}
                </Link>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
