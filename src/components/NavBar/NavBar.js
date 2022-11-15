import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import { BiUser } from 'react-icons/bi';

import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import img from '../../android-chrome-512x512.png'


const NavBar = () => {
  const { user,logOut } = useContext(AuthContext);
  
  const handleLogOut=()=>{
    logOut()
    .then(() => {})
    .catch((error) => console.error(error));
  }
    return (
        <Navbar className='p-4 ' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Image style={{height:"50px"}} src={img}></Image>
      
        <Navbar.Brand ><Link className='fw-bold text-decoration-none text-info' to={'/'}> Tuition Me</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
        <div className='me-auto d-lg-flex align-items-center p-2  d-grid  '>
        
          <Nav className="me-auto  d-lg-flex d-grid ">
            <Link className='me-3 fw-bolder text-decoration-none' to={'/services'}>Services</Link>
            <Link className='me-3 fw-bolder text-decoration-none' to={'/Blogs'}>Blogs</Link>
            
           
          </Nav>
      </div>
          <Nav>
          <div className="me-auto d-lg-flex align-items-center d-grid p-2  " href="">

          
                {user?.uid ? (
                  <>
                 
                 <Link className='me-5 fw-bolder text-decoration-none' to={'/myreview'}>My Reviews</Link>
                   <Link  className='me-5 fw-bolder text-decoration-none' to={'/addservice'}>Add Service</Link>
                 
                  <Link title={user?.displayName} className='me-2 me-auto d-lg-flex align-items-center d-grid  ' >
                {user?.photoURL ? (
                    
                  <Image
                  className='me-2'
                    src={user?.photoURL}
                    style={{ height: "30px" }}
                    roundedCircle
                   
                   
                  ></Image>
                ) : (
                  <BiUser></BiUser>
                )}
              </Link>
                   <div className='d-lg-flex d-grid align-items-center justify-content-start'>

                    <span className='text-info '>{user?.displayName}</span>
                    <Button
                      variant="danger"
                      onClick={handleLogOut}
                      className="ms-2 me-2 "
                    >
                      {" "}
                      Log Out
                    </Button>
                   </div>
                  </>
                ) : (
                  <div className='d-lg-flex d-grid'>
                    <Link
                      className="me-2 fw-bold text-decoration-none   "
                      to={"/login"}
                    >
                      Login
                    </Link>
                    <Link
                      className="me-2 fw-bold text-decoration-none  "
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;