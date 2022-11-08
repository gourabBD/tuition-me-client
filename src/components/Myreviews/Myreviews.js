import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCard from './MyRevieCard/MyReviewCard';

const Myreviews = () => {
    const myreviews=useLoaderData()
    console.log(myreviews)
    const {user}=useContext(AuthContext)
    const {review,setReview}=useState()
    return (
        <div>
            {
               myreviews.filter(review=>review?.email===user?.email).map(rev=><MyReviewCard key={rev._id} review={rev}></MyReviewCard>) 
                
               
            }
        </div>
    );
};

export default Myreviews;