import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { useLoaderData,useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const EditReview = () => {
  const [orders, setOrders] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const reviews = useLoaderData();
  const navigate = useNavigate();
    const location=useLocation()
    const from=location.state?.from?.pathname ||'/myreview'

  useEffect(() => {
    fetch(`https://tuition-me-server.vercel.app/review/${reviews?._id}`)
      .then((res) => {
       
        if (res.status === 401 || res.status === 403) {
          return logOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [user?.email, logOut]);

  const handleEditReview = (event, id) => {
    event.preventDefault();
    const form = event.target;
    const userReview = form.userReview.value;

    //update method
    fetch(`https://tuition-me-server.vercel.app/review/${orders?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ userReview: userReview }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.userReview = userReview;
          const newOrders = [...remaining, approving];
          setOrders(newOrders);
          
        }
        
      });
     
    form.reset();
    toast.success("Review updated")
    navigate(from, { replace: true });
    
    
   
  };

  return (
    <div className="d-flex justify-content-center min-vh-100 align-items-center bg-white" >
      <Form onSubmit={handleEditReview} className="w-50">
        <Form.Group className="mb-3 d-grid">
          <Form.Label className="fw-bold text-primary">Eidt Review</Form.Label>
          <textarea
            name="userReview"
            type="text"
            placeholder="Write your review"
          />
        </Form.Group>

        <Button
          onSubmit={() => handleEditReview(reviews?._id)}
          variant="primary"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EditReview;
