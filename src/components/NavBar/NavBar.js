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
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Image style={{height:'50px'}} className="me-2 mb-2" src='https://cdn.dribbble.com/userupload/2448240/file/original-9d958c1a2500b83f7b3f623bb14dfa0f.png?resize=400x0'></Image>
        <Navbar.Brand ><Link className='fw-bold text-decoration-none text-info' to={'/'}>Programmers Arena</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className='me-3 text-decoration-none' to={'/courses'}>Courses</Link>
            <Link className='me-3 text-decoration-none' to={'/Blogs'}>Blogs</Link>
            <Link className='me-3 text-decoration-none' to={'/faqs'}>FAQ</Link>
           
          </Nav>
          <Nav>
          <div href="">
                {user?.uid ? (
                  <>
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
              <div >
                
                 {
                 theme? <Button className='m-2' onClick={()=>setTheme(false)} >Dark </Button >:<Button onClick={()=>setTheme(true)} className='m-2'>Light </Button >
                  }
                
              </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default NavBar;