import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-hot-toast';

const AddServices = () => {
    const handlePostService=(event)=>{
        event.preventDefault()
        const form=event.target;
        const subject=form.subject.value;
        const cost=form.cost.value;
        const studentClass=form.class.value;
        const days=form.days.value;
        const img=form.img.value;
        const description=form.description.value;
       
        const orderservices = {
            
            subject: subject,
            img: img,
            cost: cost,
            description:description,
            class:studentClass,
            days:days,
          };
          
        //posting method
        fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderservices),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Oreder Placed Successfully!");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
        };
        
    
    return (
        <div className='d-flex justify-content-center mb-5 '>
        <Form onSubmit={handlePostService} className='w-50'>
 <Form.Group className="mb-3 d-grid" >

  <input className='mt-2 mb-2' type="text" name="subject" placeholder='Subject name' required />
  <input className='mt-2 mb-2' type="text" name="cost" placeholder='Salary/month' required/>
  <input className='mt-2 mb-2' type="text" name="class" placeholder='Students of class' required/>
  <input className='mt-2 mb-2' type="text" name="days" placeholder='Days/week' required/>
  <input className='mt-2 mb-2' type="text" name="img" placeholder='Photo URL of the subject' required/>
   <textarea className='mt-2 mb-2' name='description' type="text" placeholder="Write description" required/>
  
 </Form.Group>

 

 <Button onSubmit={handlePostService} variant="primary" type="submit">
   Submit
 </Button>
 </Form>
   </div>
    );
};

export default AddServices;