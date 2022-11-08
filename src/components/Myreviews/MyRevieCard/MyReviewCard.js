import React from 'react';

const MyReviewCard = ({review}) => {
    return (
        <div>
          {
            review.length>0 ?  <div>
            <h1>{review.name}</h1>
            </div> 
            :<p>You have no review yet.</p> 
           
          }
        </div>
    );
};

export default MyReviewCard;