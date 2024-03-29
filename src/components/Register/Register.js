import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

import { toast } from 'react-hot-toast';
import { AuthContext } from "../../context/AuthProvider/AuthProvider";


const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    //creating user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  //setting name and photo in the registration
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  
  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <div className="d-flex justify-content-center bg-white text-start">
    
    <Form className="m-4 w-50" onSubmit={handleSubmit}>
    <h1 className="text-primary">Register</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-primary">Full Name</Form.Label>
        <Form.Control
          name="name"
          type="text"
          placeholder="Enter full name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-primary">Photo URL</Form.Label>
        <Form.Control
          name="photo"
          type="text"
          placeholder="Photo URL"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="text-primary">Email address</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="text-primary">Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={
            <p className="text-primary">
              Accept the <span> <Link to={"/terms"}>Terms & conditions?</Link></span>
            </p>
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
      <p className="text-primary">Already have an account? <Link to={'/login'}>Log in now?</Link></p>
      <div>
        <Form.Text className="text-danger">{error}</Form.Text>
      </div>
    </Form>
    </div>
  );
};

export default Register;
