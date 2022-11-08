import React,{useEffect,useState} from 'react';
import HomeCard from './HomeCard';


const HomeCourses = () => {
    const [services,setServices]=useState()
   
    useEffect(()=>{
        fetch('http://localhost:5000/home')
        .then(res=>res.json())
        .then(data=>setServices(data))
       },[])
       
       console.log(services)
    return (
        <div className='row row-cols-lg-3 row-cols-1'>
            {
                services?.map(service=><HomeCard key={service?._id} service={service}></HomeCard>)
            }
        </div>
    );
};

export default HomeCourses;