import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";

const MyReviewCard = ({ review }) => {
  const navigate = useNavigate();
    const location=useLocation()
    const from=location.state?.from?.pathname ||'/myreview'
    
    const [orders, setOrders] = useState([]);
    useEffect(() => {
      fetch(`https://tuition-me-server.vercel.app/review/${review?._id}`)
        .then((res) =>  res.json())
        .then((data) => setOrders(data));
    }, [orders?.userReview]);
    

  const handleDeleteReview = (id) => {
    const proceed = window.confirm(
      "Are you sure, you want to cancel this order?"
    );

    if (proceed) {
      fetch(`https://tuition-me-server.vercel.app/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Deleted successfully!");
            navigate(from, { replace: true });
            review?.filter((odr) => odr._id !== id);
            
           
          }
        });
    }
  };
  return (
    <CardGroup className="d-flex justify-content-center ">
      <Card className="p-2 " >
        <Card.Img
          style={{ height: "150px" }}
          variant="top"
          src={review?.photoURL}
        />
        <Card.Body>
          <Card.Title>{review?.name}</Card.Title>
          <p>Service Id: {review?.serviceId}</p>
          <p>Subject: {review?.subject}</p>
          <Card.Text>
            <span className="fw-bold">Review:</span> {orders?.userReview}
          </Card.Text>

          <div className="d-lg-flex justify-content-lg-center  d-block">
          <Button
            className="me-3 mt-2"
            onClick={() => handleDeleteReview(review?._id)}
            variant="primary"
          >
            Delete Review
          </Button>
          <Link to={`/edit/${review?._id}`}>
            <Button className="mt-2" variant="primary">
              Edit Review
            </Button>
          </Link>
          </div>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default MyReviewCard;
