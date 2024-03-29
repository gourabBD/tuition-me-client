import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service/Service';

const Services = () => {

    const services=useLoaderData()
    return (
        <div className='bg-white'>
            <div>
                <h2 className='text-primary'>All the services</h2>
            </div>
            <div className='row row-cols-lg-3 row-cols-1 p-4 w-100 m-auto'>
                {
                    services?.map(service=><Service key={service?._id}  service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;