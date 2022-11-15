import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCard from './MyRevieCard/MyReviewCard';



const Myreviews = () => {
   
    const myreviews=useLoaderData()
    
    const {user}=useContext(AuthContext)
    

   
    
    return (
        <div className='row row-cols-lg-3 row-cols-1 m-auto mt-2 mb-5 p-2 d-lg-flex justify-content-center d-grid  w-100'>
        
            {
                myreviews?.filter(rev=>rev?.email === user?.email).length===0 ? <div style={{ minHeight: '500px' }} ><h3 className='text-primary' >No reviews were added.</h3></div> : myreviews?.filter(rev=>rev?.email === user?.email)?.map(review=> <MyReviewCard  key={review._id} review={review}> </MyReviewCard>)
                
               
            }
        </div>
    );
};

export default Myreviews;