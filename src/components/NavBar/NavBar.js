import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import { BiUser } from 'react-icons/bi';

import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const NavBar = () => {
  const { user,logOut } = useContext(AuthContext);
  const [theme,setTheme]=useState(true)
  const handleLogOut=()=>{
    logOut()
    .then(() => {})
    .catch((error) => console.error(error));
  }
    return (
        <Navbar className='p-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      
        <Navbar.Brand ><Link className='fw-bold text-decoration-none text-info' to={'/'}>Tuition Me</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5">
            <Link className='me-3 fw-bolder text-decoration-none' to={'/services'}>Services</Link>
            <Link className='me-3 fw-bolder text-decoration-none' to={'/Blogs'}>Blogs</Link>
            
           
          </Nav>
          <Nav>
          <div href="">

          
                {user?.uid ? (
                  <>
                 
                 <Link className='me-5 fw-bolder text-decoration-none' to={'/myreview'}>My Reviews</Link>
                   <Link  className='me-5 fw-bolder text-decoration-none' to={'/addservice'}>Add Service</Link>
                 
                  <Link title={user?.displayName} className='me-2' >
                {user?.photoURL ? (
                    
                  <Image
                    src={user?.photoURL}
                    style={{ height: "30px" }}
                    roundedCircle
                   
                   
                  ></Image>
                ) : (
                  <BiUser></BiUser>
                )}
              </Link>
                   
                    <span className='text-info'>{user?.displayName}</span>
                    <Button
                      variant="light"
                      onClick={handleLogOut}
                      className="ms-2 me-2"
                    >
                      {" "}
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link
                      className="me-2 fw-bold text-decoration-none"
                      to={"/login"}
                    >
                      Login
                    </Link>
                    <Link
                      className="me-2 fw-bold text-decoration-none"
                      to={"/register"}
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
              
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;