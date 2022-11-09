import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
const EditReview = () => {
  const [orders, setOrders] = useState([]);
  const { user, logOut } = useContext(AuthContext);
  const reviews = useLoaderData();

  useEffect(() => {
    fetch(`https://tuition-me-server.vercel.app/review/${reviews?._id}`)
      .then((res) => {
        console.log(res);
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
  };

  return (
    <div className="d-flex justify-content-center mb-5 ">
      <Form onSubmit={handleEditReview} className="w-50">
        <Form.Group className="mb-3 d-grid">
          <Form.Label>Eidt Review</Form.Label>
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
