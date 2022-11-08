import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCard from './MyRevieCard/MyReviewCard';

const Myreviews = () => {
    const myreviews=useLoaderData()
    
    const {user}=useContext(AuthContext)
    const {review,setReview}=useState()
    
    return (
        <div className='row row-cols-lg-3 row-cols-1 mt-5 mb-5 p-2 '>
        
            {
                myreviews?.filter(rev=>rev?.email === user?.email).length===0 ?<h1>you don't have any review yet.</h1> : myreviews?.filter(rev=>rev?.email === user?.email)?.map(review=> <MyReviewCard key={review._id} review={review}></MyReviewCard>)
                
               
            }
        </div>
    );
};

export default Myreviews;